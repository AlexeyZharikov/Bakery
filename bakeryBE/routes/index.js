const router = require('express').Router();

router.use('/products', require('./products'));
router.use('/admin-user', require('./adminUsers'));
router.use('/orders', require('./orders'));

module.exports = router;