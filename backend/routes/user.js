const { register, uploadFile } = require("../contollers/user");

const router = require("express").Router();

router.route("/register").post(register);
router.route("/upload").post(uploadFile);

module.exports = router;
