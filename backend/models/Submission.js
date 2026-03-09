const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true
    },

    studentName: {
      type: String,
      required: true,
      trim: true
    },

    rollNo: {
      type: String,
      required: true,
      trim: true
    },

    branch: {
      type: String,
      required: true,
      trim: true
    },

    answers: {
      type: [Number], // array of selected option indexes
      required: true
    },

    score: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// prevent multiple attempts
submissionSchema.index({ quiz: 1, rollNo: 1 }, { unique: true });

module.exports = mongoose.model("Submission", submissionSchema);
