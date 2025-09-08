const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

dotenv.config();

app.get("/", async (req, res) => {
  res.send("test api");
});
app.use(cors({
  origin: 'http://localhost:3000', // your frontend URL
  credentials: true, // allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());

// Database connection
const connectDB = require("./config/db");
connectDB();

// Routes
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/jobs",jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("The Server Running on port " + PORT);
});
