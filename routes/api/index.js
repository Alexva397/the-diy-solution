const router = require('express').Router();
const projectRoutes = require("./projects");

router.use("/projects", projectRoutes);
module.exports = router;
