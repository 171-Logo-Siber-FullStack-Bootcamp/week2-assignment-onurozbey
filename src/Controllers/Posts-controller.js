const posts = require("../Data/Posts");

getAllPosts = () => {
  // Bütün verileri döndür
  return posts;
};

getPostByID = (postID) => {
  // ID'si belirtilen veriyi döndür
  return posts.filter((x) => x.id == postID);
};

//Belirtilen metotları dışarıdan erişilebilir duruma getir
module.exports = { getAllPosts, getPostByID };
