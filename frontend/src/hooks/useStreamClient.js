import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  // Depend on primitives, not the session object: the session is polled, and a
  // refetched object would otherwise tear the call down and rejoin it.
  const callId = session?.callId;
  const status = session?.status;

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;
    let cancelled = false;

    const initCall = async () => {
      if (!callId) return;
      if (!isHost && !isParticipant) return;
      if (status === "completed") return;

      setIsInitializingCall(true);

      try {
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();
        if (cancelled) return;

        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        setStreamClient(client);

        videoCall = client.call("default", callId);
        await videoCall.join({ create: true });
        if (cancelled) return videoCall.leave();
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );
        if (cancelled) return chatClientInstance.disconnectUser();
        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", callId);
        await chatChannel.watch();
        if (cancelled) return;
        setChannel(chatChannel);
      } catch (error) {
        if (!cancelled) toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        if (!cancelled) setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    // cleanup - performance reasons
    return () => {
      cancelled = true;
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
  }, [callId, status, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;
