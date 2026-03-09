// Request	Action
// POST /api/auth/register → run registerTeacher	
// POST /api/auth/login → run loginTeacher
const express = require("express");
const router = express.Router();

const {
  registerTeacher,
  loginTeacher
} = require("../controllers/authController");

// register
router.post("/register", registerTeacher);

// login
router.post("/login", loginTeacher);

module.exports = router;

