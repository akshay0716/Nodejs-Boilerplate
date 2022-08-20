const express = require("express");
const router = express.Router();

// @DESCRIPTION    LOGIN/LANDING PAGE
// @ROUTE          GET /

router.get("/", (req, res) => {
  res.render("login");
});

// @DESCRIPTION    DASHBOARD
// @ROUTE          GET /

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
