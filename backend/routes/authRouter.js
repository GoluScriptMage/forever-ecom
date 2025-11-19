// routes
import express from "express";
import passport from "passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173",
    failureRedirect: "http://localhost:5173/login",
  })
);

router.get("/status", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      name: req.user.name,
      email: req.user.email,
    });
  } else {
    res.json({ isAuthenticated: false });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    res.clearCookie("connect.sid");
    res.json({
      message: "Logout Successfully",
    });
  });
});

export default router;

// auth/success
// auth/status
//  auth/logout
