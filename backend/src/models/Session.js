import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    problem: {
      type: String,
      required: [true, "Problem is required"],
      trim: true,
      minlength: [3, "Problem must be at least 3 characters"],
      maxlength: [200, "Problem cannot exceed 200 characters"],
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
      index: true, // 🔥 fast filtering
    },

    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // 🔥 faster queries
    },

    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
      index: true,
    },

    callId: {
      type: String,
      required: true,
      unique: true, // 🔥 prevent duplicate stream calls
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false, // cleaner response (__v removed)
  }
);



// 🔥 Compound Index (Very important for scaling)
sessionSchema.index({ status: 1, createdAt: -1 });



// 🔥 Virtual field (optional but powerful)
sessionSchema.virtual("isFull").get(function () {
  return !!this.participant;
});



// 🔥 Pre-save hook (extra safety)
sessionSchema.pre("save", function (next) {
  if (this.participant && this.host.equals(this.participant)) {
    return next(new Error("Host cannot be participant"));
  }
  next();
});



// 🔥 Transform output (clean API response)
sessionSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.__v;
    return ret;
  },
});



const Session = mongoose.model("Session", sessionSchema);

export default Session;