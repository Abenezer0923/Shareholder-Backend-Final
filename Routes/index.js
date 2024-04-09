const express = require("express");
const router = express.Router();

const shareHolder_route = require("./router/shareHolder");
const newPayment = require("./router/newPayment");
const auth_route = require("./router/auth");
const upload_route = require("./router/payment")

router.use("/shareHolder", shareHolder_route);
router.use("/auth", auth_route);
router.use("/newPayment", newPayment);
router.use("/orderPayment", upload_route);



module.exports = router;
