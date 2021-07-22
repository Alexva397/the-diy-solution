const router = require('express').Router();
const projectRoutes = require('./projects');
const userRoutes = require('./user');
const materialRoutes = require('./materials');
const imageRoutes = require('./image');

router.use('/user', userRoutes);
router.use('/projects', projectRoutes);
router.use('/materials', materialRoutes);
router.use('/upload', imageRoutes);
module.exports = router;