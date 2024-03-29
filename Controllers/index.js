const shareHolderController = require("./Controller/ShareHolders/shareHoldersController");
const authController = require("./Controller/Auth/authController");
const paymentController = require("./Controller/Payments/bankTransferController")
module.exports = {
  authController,
  shareHolderController,
  paymentController
};
