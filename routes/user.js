import express from 'express'
import userController from '../controllers/userController'
const router = express.Router()

router.route('/').get(userController.findById).put(userController.update).delete(UserController.remove)
router.route('/:id').get(userController.findById).put(userController.update).delete(userController.remove)
export default router

