const router = require("express").Router();
const AuthController = require("../Controller/AuthControllers");

router.post("/google", AuthController.google);

module.exports = router;
