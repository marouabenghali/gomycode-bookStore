const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

// const users = require("./routes/users");

const app = express();

// body-parser Middlware
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// passport Midleware
app.use(passport.initialize());
//passport Config
require("./config/passport")(passport);

//connect bd
// const db="mongodb+srv://bookstore:bookstore@cluster0-db2dl.mongodb.net/test?retryWrites=true&w=majority"
const db = "mongodb://localhost:27017/booklist";



mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//use route
app.use("/book-list", require("./routes/books"));
app.use("/commande-list", require("./routes/commandes"));
app.use("/customer-list", require("./routes/customers"));
app.use("/admin-list", require("./routes/admins"));
//*app.use("/users", users);

app.listen(5000, err => {
  if (err) console.log("failed to connect");
  else {
    console.log("server started on port 5000");
  }
});