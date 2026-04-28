const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createQuiz, getMyQuizzes, getQuizById, submitQuiz, getQuizResults } = require("../controllers/quizController");

// teacher creates quiz
router.post("/create", protect, createQuiz);

// teacher fetches own quizzes
router.get("/mine", protect, getMyQuizzes);

// student fetch quiz
router.get("/:id", getQuizById);

//submission

router.post("/:id/submit", submitQuiz);
//result

router.get("/:id/results", protect, getQuizResults);

//export

module.exports = router;