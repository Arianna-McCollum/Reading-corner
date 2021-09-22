const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index'
}));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.render("login");
});