import { Router } from 'express'
import { createUserController, deleteUserController, listUsersController, updateUserController } from '../controllers/users.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'
import ensureEmailAlreadyRegisteredMiddleware from '../middlewares/ensureEmailAlreadyRegistered.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { userSchema, userUpdateSchema } from '../schemas/users.schemas'
import ensureIsOwnerMiddleware from '../middlewares/ensureIsOwner.middleware'


const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSchema), ensureEmailAlreadyRegisteredMiddleware, createUserController)
userRoutes.get('/:id',ensureTokenIsValidMiddleware, ensureIsOwnerMiddleware, listUsersController)
userRoutes.delete('/:id',ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, ensureIsOwnerMiddleware, deleteUserController)
userRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(userUpdateSchema), ensureUserExistsMiddleware, ensureIsOwnerMiddleware, ensureEmailAlreadyRegisteredMiddleware, updateUserController)

export default userRoutes