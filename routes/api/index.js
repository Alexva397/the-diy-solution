const router = require('express').Router();
const projectRoutes = require('./projects');
const userRoutes = require('./user');

router.use('/user', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
