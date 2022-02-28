const express = require('express');
const router = express.Router();
const { findAll, createUser, findUser, updateUser, deleteUser, userLogin, userLogout, getUserByUuid , uploadImage } = require('../../controllers/user')
const {emailVerification, forgotPassword, verifyResetOtp, resetPassword} = require('../../controllers/user/emailverification')
router.get('/', findAll);
router.post('/', createUser);
router.post('/login', userLogin);
router.put('/emailverification', emailVerification);
router.post('/forgotpassword', forgotPassword);
router.post('/verifyresetotp', verifyResetOtp);
router.put('/resetpassword', resetPassword);
router.get('/:id', findUser);
router.get('/:uuid', getUserByUuid)
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.put('/logout', userLogout);








module.exports = router;