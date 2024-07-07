const express = require("express");
const { handleCreateReferral } = require("../controllers/referralController");

const router = express.Router();

router.post("/", handleCreateReferral);

module.exports = router;
