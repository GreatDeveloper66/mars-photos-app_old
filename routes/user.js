import express from 'express'
import userController from '../controllers/userController'
const userRoutes = express.Router()

userRoutes.route('/').get(userController.findById).put(userController.update).delete(UserController.remove)
userRoutes.route('/:id').get(userController.findById).put(userController.update).delete(userController.remove)
export default userRoutes

