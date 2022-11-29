const express = require("express");

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to the homepage</h1>");
};

const handleLoginRequest = (req, res) => {
  res.send("<h1>Welcome to the login page</h1>");
};

const handleContactRequest = (req, res) => {
  res.send("<h1>Welcome to the contact page</h1>");
};

const handleAboutRequest = (req, res) => {
  res.send("<h1>Welcome to the about page</h1>");
};

const app = express();

app.post("/login", handleLoginRequest);
app.get("/contact", handleContactRequest);
app.delete("/about", handleAboutRequest);
app.put("/", handleHomeRequest);

app.listen("5000", () => {
  console.log("App is ready!");
});
