const path = require("path");
const router = require("express").Router();
const controller = require("../controllers/controller");

router.get("/api/books", controller.findAll);
router.post("/api/books", controller.create);
router.delete("/api/books/:id", controller.remove);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
