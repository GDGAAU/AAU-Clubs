const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const csrf = require("../Middleware/CSRFProtectionMW");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");

exports.google = async (req, res) => {
  const { idToken } = req.body;
  if (!idToken) {
    return res.status(400).json({ error: "ID token is required" });
  }

  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  try {
    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
    } catch (error) {
      return res.status(400).json({ error: "Invalid ID token" });
    }

    const payload = ticket.getPayload();
    const { email, name, googleId } = payload;

    let user = await User.findOne({ where: { email } });
    if (user) {
      const token = jwt.sign(
        {
          userId: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3h" }
      );

      const csrfToken = csrf.generateToken(req, res, true, true);

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "none",
      });
      res.setHeader("csrfToken", csrfToken);

      return res.status(200).json({ message: "Logged in successfully" });
    } else {
      user = await User.create({
        username: name,
        email: email,
        googleId: googleId,
        role: "user",
      });

      return res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
