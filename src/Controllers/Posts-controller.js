const posts = require("../Data/Posts");

getAllPosts = () => {
  return posts;
};

getPostByID = (postID) => {
  return posts.filter((x) => x.id == postID);
};

module.exports = { getAllPosts, getPostByID };
