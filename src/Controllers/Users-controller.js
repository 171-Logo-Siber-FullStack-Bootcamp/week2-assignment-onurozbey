const users = require("../Data/Users");

getAllUsers = () => {
  // Bütün verileri döndür
  return users;
};

getUserByID = (UserID) => {
  // ID'si belirtilen veriyi döndür
  return users.filter((x) => x.id == UserID);
};

//Belirtilen metotları dışarıdan erişilebilir duruma getir
module.exports = { getAllUsers, getUserByID };
