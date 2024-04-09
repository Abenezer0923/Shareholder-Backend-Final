const shareHolderController = require("./Controller/ShareHolders/shareHoldersController");
const authController = require("./Controller/Auth/authController");
const paymentController = require("./Controller/Payments/bankTransferController")
const newPaymentController = require("./Controller/Payments/newBankTransferController");
module.exports = {
  authController,
  shareHolderController,
  paymentController,
  newPaymentController,
};
