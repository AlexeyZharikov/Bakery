const adminUserModel = require("../../../models").adminUserModel

const refresh = (req,res ) =>  {
  try {

  }
  catch(e){

  }
}

const getUsers = (req, res) => {
  return adminUserModel
  .find()
  .then((users) => res.status(200).json(users))
  .catch((err) => res.status(500).json(err));
}

module.exports = { refresh,  getUsers} 