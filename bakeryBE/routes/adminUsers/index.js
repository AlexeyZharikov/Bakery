const adminUsersRouter = require('express').Router();
const {login}  = require('../../actions').adminUser.login;
const {logout} = require('../../actions').adminUser.logout;
const refresh = require('../../actions').adminUser.refresh


adminUsersRouter.get('/', refresh);
adminUsersRouter.post('/', login);
adminUsersRouter.post('/', logout);



module.exports = adminUsersRouter;

