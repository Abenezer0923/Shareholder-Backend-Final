const express = require("express");
const router = express.Router();

const shareHolder_route = require("./router/shareHolder");
const adminShareholder=require("./router/adminRoute");
const auth_route = require("./router/auth");
// const validateToken=require('../middleware/validateTokenHandler');

router.use("/shareHolder", shareHolder_route);
router.use("/auth", auth_route);

// Admin Dashboard Routes
router.use("/admin/dashboard",adminShareholder);

module.exports = router;





