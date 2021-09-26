const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(require('./controllers/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.set("view engine", "hbs");
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index'
}));

app.engine('handlebars', hbs.engine);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
});

