const router = require('express').Router();

router.use('/products', require('./products'));
router.use('/admin-user', require('./adminUsers'));

module.exports = router;