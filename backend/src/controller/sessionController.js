import { chatClient, streamClient } from "../lib/stream.js";
import  Session  from "../models/Session.js";
export async function createSession(req , res) {
  try {
    const {problem , difficulty} = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if(!problem || !difficulty){
      return res.status(400).json({
        success : false,
        message: "Problem and difficulty are required "
      })
    }

    // generate a unique call id for stream video
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7 )}`;
    // Now create a session in DB 
    const session = await Session.create({problem , difficulty , host: userId, callId});

    // Now create a stream video call  
    await streamClient.video.call("default", callId).getOrCreate({
      data : {
        created_by_id: clerkId,
        custom: {problem , difficulty , sessionId: session._id.toString()},
      }
    }); 

    // chat messaging 
   const channel =  chatClient.channel("messaging" , callId , {
      name : `${problem} Session`,
      created_by_id:clerkId,
      members:[clerkId]
    })

    await channel.create();
    res.status(200).json({
      success: true,
      message:"Session created successfully",
      session : session
    })

  } catch (error) {
    console.log("Error in createSession controller:", error.message)
    res.status(500).json({
      success : false,
      message : "Internal server Error"
    })
  }
}


export async function getActiveSessions(_, res) {
  try {
    // find all the sessions whose status is equal to active 
    const sessions =  await Session.find({status:"active"}).populate("host","name profileImage email , clerkId").sort({createdAt:-1}).limit(20);

    if(!sessions){
      return res.status(404).json({
        success: false,
        message : "sessions are required",
      })
    }
    res.status(200).json({
      success : true ,
      message : " have get Active sessions",
      session: sessions
    })

  } catch (error) {
    console.log("Error in getActiveSession controller:", error.message)
    res.status(500).json({
      success : false,
      message : "Internal server Error"
    })
  }
}

export async function getMyRecentSessions(req , res) {
  try {
    const userId = req.user._id;

    // get sessions where user is either host or participant
    // get all the session where status is completed 
    const sessions = await Session.find({status:"completed",
      $or:[{host:userId} , {participant:userId}]
    }).sort({createdAt:-1}).limit(20);
    if(!sessions){
      return res.status(404).json({
        success : false,
        message : "sessions are required"
      })
    }

    res.status(200).json({
      success: true,
      message : "Have get my recent sessions",
      session : sessions
    })


  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message)
    res.status(500).json({
      success : false,
      message : "Internal server Error"
    })
  }
}

export async function getSessionById(req , res) {
  try {
    const {id} = req.body;

    const session = await Session.findById(id).populate("host","name email profileImage clerkId").populate("participant","name email profileImage clerkId");

    if(!session){
      return res.status(404).json({
        success : false,
        message: "Session  not found"
      })
    }
    res.status(200).json({
      success : true,
      message : "have get the getSessionById",
      Session : session
    })
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message)
    res.status(500).json({
      success : false,
      message : "Internal server Error"
    })
  }
}

export async function joinSession(req , res) {
  try {
    const {id} = req.params;
    const userId = req.user._id
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if(!session){
      return res.status(404).json({
        success : false,
        message : "Session not found"
      })
    }

    // check if session is already full - has a participant 
    if(session.participant){
      return res.status(404).json({
        success : false,
        message : "Session is full"
      })
    }

    session.participant = userId;
    await session.save();
    const channel = chatClient.channel("messaging",session.callId)
    await channel.addMembers([clerkId])
    res.status(200).json({
      success : true,
      message: "have get joinSession",
      Session : session
    })
  } catch (error) {
    console.log("Error in joinSession controller:", error.message)
    res.status(500).json({
      success : false,
      message : "Internal server Error"
    })
  }
}

export async function endSession(req , res) {
  try {
     const {id} = req.params;
     const userId = req.user._id;

     const session = await Session.findOne(id);
     if(!session){
      return res.status(404).json({
        success : false,
        message : "Session not found"
      })
     }

     // check if the the user is host or not -> bcz only host can end the session 
     if(session.host.toString() !== userId.toString()){
      // it means you are not the host
      return res.status(403).json({
        success : false,
        message : " Only host can end the session"
      })
     }

     // check if the session is already completed
     if(session.status === "completed"){
      return res.status(400).json({
        success : false,
        message : "Session is already completed"
      })
     }

     session.status = "completed"
     await session.save();

     // delete stream video call
     const call = streamClient.video.call("default",session.callId);
     await call.delete({hard:true})

     // delete stream chat channel
     const channel = chatClient.channel("messaging", session.callId);
     await channel.delete();  

     res.status(200).json({
      success : true,
      Session : session,
      message : " Session is ended successfully"
     })

  } catch (error) {
    console.log("Error in endSession controller:", error.message)
    res.status(500).json({
      success : false,
      message : "Internal server Error"
    })
  }
}