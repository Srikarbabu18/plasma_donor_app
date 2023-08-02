const express = require('express');
const router = express.Router();

const AdminModel = require('../app/adminRegistration/adminLgModel');
const registrationController = require('../app/adminRegistration/registrationController');
const loginController = require('../app/adminRegistration/loginController');
const UserModel = require('../app/userRegistration/userModel');
const registrationControllerUser = require('../app/userRegistration/registrationController');
const loginControllerUser = require('../app/userRegistration/loginController');
const adminController = require('../app/admin/adminController');

router.route('/admin/getAll').get(adminController.getDataController);
router.route('/admin/create').post(adminController.createAdminController);
router.route('/admin/update/:id').patch(adminController.updateAdminDataController)
router.route('/admin/remove/:id').delete(adminController.deleteAdminController);
router.route('/admin/register').post(registrationController.createRegistrationController);
router.route('/admin/login').post(loginController.createLoginController);
router.route('/user/register').post(registrationControllerUser.createRegistrationControllerUser);
router.route('/user/login').post(loginControllerUser.createLoginControllerUser);

module.exports = router;
