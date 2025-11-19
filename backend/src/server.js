import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import session from "express-session";
import passport from "passport";
import authRoutes from "../routes/authRouter.js";
// Load environment variables

dotenv.config();

import "../config/passport-setup.js";
import connectMongoDB from "../config/mongoDB.js";

// Initialize MongoDB server
connectMongoDB();

// CONNECTING TO APP
const app = express();
const PORT = process.env.PORT || 3000;

// FN Bouncer for sneaky requests
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  }

  res.redirect("auth/google");
};


// Rate Limiting
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 Hour
  max: 100,
});

// Applying rate limiting to all requests
app.use(limiter);

app.use(express.json());

// Step 1: Initialize Session
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 Day
    },
  })
);

// Step 2: Initialize Passport
app.use(passport.initialize());

// Step 3: Enable Passport session handling
app.use(passport.session());

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth routes
app.use("/auth", authRoutes);
app.use("/success", isAuthenticated, (req, res) => {
  res.send("Welcome, Dear")
})

// Server Listening
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/`);
});
