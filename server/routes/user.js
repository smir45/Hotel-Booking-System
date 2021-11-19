const express = require('express');
const router = express.Router();
const { findAll, createUser, findUser, updateUser, deleteUser, userLogin } = require('../controllers/user')

router.get('/', findAll);
router.post('/', createUser);
router.post('/login', userLogin);
router.get('/:id', findUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);







module.exports = router;