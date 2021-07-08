const router = require('express').Router();
const bookRoutes = require("./projects");

router.use("/projects", bookRoutes);
module.exports = router;
