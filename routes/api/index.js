const router = require('express').Router();
const projectRoutes = require('./projects');
const userRoutes = require('./user');
const materialRoutes = require('./materials');

router.use('/user', userRoutes);
router.use('/projects', projectRoutes);
router.use('/materials', materialRoutes);
module.exports = router;