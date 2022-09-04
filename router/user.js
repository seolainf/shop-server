import express from 'express';
import {
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
  getUserStat,
} from '../controllers/users.js';
import {
  verifyToken,
  verifyTokenAdmin,
  verifyTokenAuthorization,
} from '../utils/verifyToken.js';

const router = express.Router();

//update user
router.put('/:id', verifyTokenAuthorization, updateUser);
//delete user
router.delete('/:id', verifyTokenAuthorization, deleteUser);
//get a user
router.get('/find/:id', getUser);
//get all user
router.get('/', verifyTokenAdmin, getAllUser);
//get user stats
router.get('/stats', verifyTokenAdmin, getUserStat);
export default router;
