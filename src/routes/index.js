const { Router } = require("express");
const htmlRoutes = require("./html");

const router = Router();

router.use("/", htmlRoutes);

module.exports = router;
