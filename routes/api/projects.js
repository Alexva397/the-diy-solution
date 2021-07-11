const router = require("express").Router();
const projectController = require("../../controllers/projectControllers");

router.route("/")
  .get(projectController.findAll)
  .post(projectController.create)
  
router.route('')


router
  .route("/:id")
  .put(projectController.update)
  .delete(projectController.remove);

module.exports = router;