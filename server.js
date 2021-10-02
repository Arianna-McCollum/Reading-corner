const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


// app.use(session(sess));

const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
// app.engine('handlebars', exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));



app.use(require("./controllers/"));

// passport initialize
app.use(passport.initialize());
require("./config/passport-config");
// app.use(passport.session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

// passport stuff

// const passport = require("passport");
// const initPassport = require("./config/passport-config");
// const { User } = require("./models");

// initPassport(
//   passport,
//   email => User.findOne({
//     where: { email: email}
//   }),
//   id => User.findOne(
//     {where:{ id: id}}
//   )
// )


// app.post(
//   "/login", checkNotAuthenticated,
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true,
//   })
// );

