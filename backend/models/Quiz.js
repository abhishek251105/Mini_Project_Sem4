const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },

  options: {
    type: [String],   // 4 options 
    required: true,
    validate: [arr => arr.length === 4, "There must be exactly 4 options"]
  },

  correctOptionIndex: {
    type: Number,     // correct option index
    required: true,
    min: 0,
    max: 3
  }
});

const quizSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true
    },

    title: {
      type: String,
      required: true,
      trim: true
    },

    questions: [questionSchema],

    timeLimit: {
      type: Number, // in minutes
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Quiz", quizSchema);
