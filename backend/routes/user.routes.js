const express = require('express');
const router = express.Router();
const { addUser, updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/user.controller.js');


router.post('/addUser', addUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/getUser/:id', getUser);
router.get('/getAllUsers', getAllUsers);

module.exports = router;