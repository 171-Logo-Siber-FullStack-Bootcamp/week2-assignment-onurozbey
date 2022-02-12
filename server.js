const postsController = require("./src/Controllers/Posts-controller");
const usersController = require("./src/Controllers/Users-controller");

const express = require("express");
const app = express();

// PostID ile istenen posts VERİSİ getirilecek
app.get("/posts/:postID", (req, res) => {
  var post = postsController.getPostByID(req.params.postID);
  res.send(post);
});
// Bütün post VERİLERİ getirilecek
app.get("/posts", (req, res) => {
  var posts = postsController.getAllPosts();
  res.send(posts);
});

// UserID ile belirlenen users VERİSİ getirilecek
app.get("/users/:userID", (req, res) => {
  var user = usersController.getUserByID(req.params.userID);
  res.send(user);
});
// Bütün user VERİLERİ getirilecek
app.get("/users", (req, res) => {
  var users = usersController.getAllUsers();
  res.send(users);
});

const PORT = 5000;
app.listen(PORT);
