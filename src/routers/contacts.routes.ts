import { Router } from 'express'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureContactAlreadyRegisteredMiddleware from '../middlewares/ensureContactAlreadyRegistered.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { createContactsController, deleteContactController, listContactByUserController, updateContactController } from '../controllers/contacts.controllers'
import { contactSchema, contactUpdateSchema } from '../schemas/contacts.schemas'
import ensureIsOwnerMiddleware from '../middlewares/ensureIsOwner.middleware'




const contactRoutes: Router = Router()
contactRoutes.get('/users/:id', ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, ensureIsOwnerMiddleware ,listContactByUserController)
contactRoutes.post('', ensureDataIsValidMiddleware(contactSchema), ensureContactAlreadyRegisteredMiddleware, ensureTokenIsValidMiddleware, createContactsController)
contactRoutes.delete('/:id',ensureTokenIsValidMiddleware, ensureUserExistsMiddleware, ensureIsOwnerMiddleware, deleteContactController)
contactRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureDataIsValidMiddleware(contactUpdateSchema), ensureUserExistsMiddleware, ensureIsOwnerMiddleware, ensureContactAlreadyRegisteredMiddleware, updateContactController)

export default contactRoutes