var express = require("express");
var router = express.Router();
const controller = require("../../Controllers/index");

//Admin Auth Controller
const adminAuthConroller=require('../../Controllers/Controller/Auth/adminAuthController');
const validateToken=require('../../middleware/validateTokenHandler');
const Router=express.Router();

router.post("/login", controller.authController.login);
router.post("/verifyOTP", controller.authController.verifyOtp);
router.post("/forgotPasswor", controller.authController.forgotpassword);
router.post("/verifyToken", controller.authController.verifypasswordresettoken);
router.post("/resetPassword", controller.authController.resetPassword);

 // admin Auth Roues
 router.post('/admin/register',adminAuthConroller.registeUser);
 router.post('/admin/login',adminAuthConroller.loginUser);
 router.get('/admin/current',adminAuthConroller.currentUser);
//  router.get('/admin/logout',adminAuthConroller.logout);

module.exports = router;
