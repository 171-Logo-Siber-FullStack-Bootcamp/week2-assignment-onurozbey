const users = require("../Data/Users");

getAllUsers = () => {
  return users;
};

getUserByID = (UserID) => {
  return users.filter((x) => x.id == UserID);
};

module.exports = { getAllUsers, getUserByID };
