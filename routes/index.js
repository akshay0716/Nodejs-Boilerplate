const express = require("express");
const router = express.Router();

// @DESCRIPTION    LOGIN/LANDING PAGE
// @ROUTE          GET /

// router.get("/", (req, res) => {
//   res.render("main");
// });

// @DESCRIPTION    DASHBOARD
// @ROUTE          GET /

router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
