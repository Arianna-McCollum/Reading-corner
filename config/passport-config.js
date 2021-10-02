const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

const bcrypt = require("bcryptjs");

// const db = require("../../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    function (email, password, done) {
      User.findOne({email: email})
      .then(user=>{
        bcrypt.compare(password, user.password)
        .then(match=>{
          console.log(match, user)
          if (match){
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch(err=>done(err))
      })
      // console.log("passport email" + email);
      // console.log("passport pass:" + password);
      // try {
      //   const user = await User.findOne({
      //     where: { email: email },
      //   });
      //   console.log("after try", user.dataValues);
      //   if (!user) {
      //     return done(null, false, { message: "Incorrect email!" });
      //   }
      //   const result = await bcrypt.compare(password, user.password);
      //   if (!result) {
      //     return done(null, false, { message: "Incorrect password!" });
      //   }
      //   console.log("found matching user")
      //   return done(null, user, { message: "Found matching user"});
      // } catch (err) {
      //   return done(err);
      }
  )
);

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findByPk(id).then(function (user) {
//     done(null, user);
//   });
// });
