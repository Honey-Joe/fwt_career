const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role,resume,coverletter ,portfolio ,skills ,experience , education } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password, role,resume,coverLetter:coverletter ,portfolio ,skills ,experience:experience , education });
    await user.save();

    res.status(201).json({ message: "User registered successfully" ,data: user });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // set token in cookie
    res.cookie("token", token, {
      httpOnly: true,       // not accessible from JS
      secure: process.env.NODE_ENV === "production", // true in prod (HTTPS)
      sameSite: "strict",   // CSRF protection
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.json({
      message: "Login successful",
      user: { id: user._id, name: user.name, role: user.role }
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
    
  }
};

