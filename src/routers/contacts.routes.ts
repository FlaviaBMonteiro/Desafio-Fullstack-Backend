import { Router } from 'express'

import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureContactAlreadyRegisteredMiddleware from '../middlewares/ensureContactAlreadyRegistered.middleware'
import ensureTokenIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { createContactsController } from '../controllers/contacts.controllers'
import { contactSchema } from '../schemas/contacts.schemas'



const contactRoutes: Router = Router()

contactRoutes.post('', ensureDataIsValidMiddleware(contactSchema), ensureContactAlreadyRegisteredMiddleware, ensureTokenIsValidMiddleware, createContactsController)

export default contactRoutes