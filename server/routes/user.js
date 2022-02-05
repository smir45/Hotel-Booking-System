const express = require('express');
const router = express.Router();
const { findAll, createUser, findUser, updateUser, deleteUser, userLogin, userLogout, getUserByUuid, uploadImage } = require('../controllers/user')

router.get('/', findAll);
router.post('/', createUser);
router.post('/login', userLogin);
router.get('/:id', findUser);
router.get('/:uuid', getUserByUuid)
router.put('/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/logout',userLogout);
// router.post('/upload',uploadImage)







module.exports = router;