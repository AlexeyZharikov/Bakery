const adminUsersRouter = require('express').Router();

const {registration} = require('../../actions').adminUser.registration;
const {login}  = require('../../actions').adminUser.login;
const {logout} = require('../../actions').adminUser.logout;
const {refresh} = require('../../actions').adminUser.refresh;


const deleteUser = require('../../actions').adminUser.deleteUser;
const {getUsers} = require('../../actions').adminUser.getUsers;

adminUsersRouter.delete('/', deleteUser);
adminUsersRouter.get('/', getUsers);



adminUsersRouter.get('/', refresh);
adminUsersRouter.post('/', registration);
adminUsersRouter.post('/', login);
adminUsersRouter.post('/', logout);



module.exports = adminUsersRouter;

