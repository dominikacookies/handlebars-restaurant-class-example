const { Router } = require("express");
const { renderHomePage } = require("../../controllers/html");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
