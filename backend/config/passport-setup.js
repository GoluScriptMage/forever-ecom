import googleStrategy from "passport-google-oauth20";
import passport from "passport";
import User from "../models/userModel.js";

// Getting the Strategy
const GoogleStrategy = googleStrategy.Strategy;
console.log(process.env.GOOGLE_CLIENT_ID);

passport.use(
  // Configuring the Strategy with ID and secret
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
  },

  //   Verficiation Function ( Called after successfuol auth)
  // And with this we can take the info from google and save it to our DB
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if the user Exists
      const existingUser = await User.findOne({
        email: profile.emails[0].value,
      });
      if (existingUser) {
        return done(null, existingUser);
      }

      // IF not then save the user infofrom the profile and send them via the done fn
      const newUser = new User({
        email: profile.emails[0].value,
        name: profile.displayName,
      });

      // Save the User in the DB
      const savedUser = await newUser.save();

      // Done fn takes two params (error, user)
      done(null, savedUser);
    } catch (error) {
      //Sends the errror if any comes
      done(error, null);
    }
  }
));

// Serializing the User
// Means Storing the data somewhere and gave him just the key to get it back whenever needed
passport.serializeUser((user, done) => {
  done(null, user._id); // Storing only the user ID and this id we got fromt the DB
});

// Deserializing the User
// Getting back the info using the key we gave
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
