import { Router } from 'express'
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers/users.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'
import ensureEmailAlreadyRegisteredMiddleware from '../middlewares/ensureEmailAlreadyRegistered.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { userSchema, userUpdateSchema } from '../schemas/users.schemas'


const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailAlreadyRegisteredMiddleware ,createUserController)
userRoutes.get('',ensureTokenIsValidMiddleware, listUsersController)
userRoutes.delete('/:id', ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, deleteUserController)
userRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureUserExistsMiddleware, ensureEmailAlreadyRegisteredMiddleware, updateUserController)

export default userRoutes