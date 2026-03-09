const Quiz = require("../models/Quiz");

// CREATE QUIZ
exports.createQuiz = async (req, res) => {
  try {
    const { title, questions, timeLimit } = req.body;

    const quiz = await Quiz.create({
      teacher: req.teacherId, // authMiddleware se aaega
      title,
      questions,
      timeLimit
    });

    res.status(201).json({
      message: "Quiz created successfully",
      quizLink: `/quiz/${quiz._id}`
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET QUIZ FOR STUDENT (no answers)
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // remove correct answers
    const safeQuestions = quiz.questions.map(q => ({
      questionText: q.questionText,
      options: q.options
    }));

    res.json({
      title: quiz.title,
      timeLimit: quiz.timeLimit,
      questions: safeQuestions
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const Submission = require("../models/Submission");

// SUBMIT QUIZ
exports.submitQuiz = async (req, res) => {
  try {
    const { studentName, rollNo, branch, answers } = req.body;
    const quizId = req.params.id;

    // find quiz
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // check number of answers
    if (answers.length !== quiz.questions.length) {
      return res.status(400).json({ message: "Invalid number of answers" });
    }

    // calculate score
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctOptionIndex) {
        score++;
      }
    });

    // save submission (unique constraint prevents multiple attempts)
    const submission = await Submission.create({
      quiz: quizId,
      studentName,
      rollNo,
      branch,
      answers,
      score
    });

    res.json({
      message: "Quiz submitted successfully",
      score
    });

  } catch (error) {

    // duplicate attempt handling
    if (error.code === 11000) {
      return res.status(400).json({ message: "You have already attempted this quiz" });
    }

    res.status(500).json({ message: error.message });
  }
};
//result(only teacher)

exports.getQuizResults = async (req, res) => {
  try {
    const quizId = req.params.id;
    const branch = req.query.branch;

    // find quiz
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    // ensure owner
    if (quiz.teacher.toString() !== req.teacherId) {
      return res.status(403).json({ message: "Not authorized to view results" });
    }

    // filter
    const filter = { quiz: quizId };
    if (branch) filter.branch = branch;

    // fetch results sorted by score
    const results = await Submission.find(filter)
      .sort({ score: -1, createdAt: 1 })
      .select("-answers -__v");

    res.json(results);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
