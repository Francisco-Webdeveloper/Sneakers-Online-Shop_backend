const express = require("express");
const {
  getSneakers,
  getSneaker,
  createSneaker,
  deleteSneaker,
  updateSneaker,
} = require("../controllers/sneakerController");

// instance of the router
const router = express.Router();

// routes
router.get("/", getSneakers);

router.get("/:id", getSneaker);

router.post("/", createSneaker);

router.delete("/:id", deleteSneaker);

router.patch("/:id", updateSneaker);

module.exports = router;
