const router = require("express").Router();
const materialController = require("../../controllers/materialControllers");


router.route("/:id")
.put(materialController.removeMaterial)

module.exports = router;