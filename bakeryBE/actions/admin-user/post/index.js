const adminUserModel = require("../../../models").adminUserModel
const bcrypt = require('bcrypt');


const registration = async (req, res) => {
    const {
      name, 
      password
    } = req.body
    
    let hashedPass = await bcrypt.hash(password, 3)
    const newUser = new adminUserModel({
      name, 
      password: hashedPass
    })

    return newUser
    .save()
    .then(() => res.status(201).json('User added'))
    .catch((err) => res.status(500).json(err.message));

}
const login = (req, res,next) => {

}

const logout = (req, res, next) => {


}

module.exports = { login, logout, registration }