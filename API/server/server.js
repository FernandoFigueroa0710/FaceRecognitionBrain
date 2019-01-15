const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is working");
});

app.listen(3001, () => {
  console.log("I am running on port 3001");
});

/*
API layout
/ -> this is working
/sign in  -> POST = sucess/fail
/register --> POST = new user
/profile -> /:userId --> GET = user
/image --> PUT -> user
 */
