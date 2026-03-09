const Teacher = require("../models/Teacher");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Teacher
exports.registerTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. check if email already exiists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: "Teacher already registered" });
    }

    // 2. (encrypt)hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. save teacher to the db
    const teacher = await Teacher.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Registration successful"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// LOGIN TEACHER
exports.loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. check if teacher exists
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 2. compare password
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3. create token
    const token = jwt.sign(
      { id: teacher._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

