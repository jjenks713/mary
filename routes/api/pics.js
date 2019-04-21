const router = require("express").Router();
const picsController = require("../../controllers/picsController");


// Matches with "/api/books"
router.route("/")
  .get(picsController.findAll)
  .post(picsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(picsController.findById)
  .put(picsController.update)
  .delete(picsController.remove);

module.exports = router;
