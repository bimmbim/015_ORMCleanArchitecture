const express = require("express");
const router = express.Router();
const komikController = require("../controller/komikController");

router.get("/komik", komikController.getAllKomik);
router.get("/komik/:id", komikController.getKomikById);

module.exports = router;
