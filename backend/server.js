const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ================= CORS CONFIG =================

app.use(cors({
  origin: true, // allow all origins for now (since S3 URL may change)
  credentials: true
}));

// ================= MIDDLEWARE =================

app.use(express.json());

// ================= ROUTES =================

// Test route
app.get("/", (req, res) => {
  res.send("API running...");
});

// Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Protected route
const protect = require("./middleware/authMiddleware");
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route",
    teacherId: req.teacherId
  });
});

// Quiz routes
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/quiz", quizRoutes);

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
