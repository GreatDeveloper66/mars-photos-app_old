import express from 'express'
import userRoutes from './user'
const userRouter = express.Router()

userRouter.use('/api/users', userRoutes)


export default userRouter