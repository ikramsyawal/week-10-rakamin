const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.findOne);
router.post("/", MovieController.create);
router.put("/:id", MovieController.update);
router.delete("/:id", MovieController.destroy);

module.exports = router;
