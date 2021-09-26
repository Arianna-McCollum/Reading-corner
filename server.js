const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index'
}));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
});

