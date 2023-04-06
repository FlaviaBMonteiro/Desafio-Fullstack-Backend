import {
    contactSchema,     
    returnContactSchema,
    returnContactsByUserSchema

} from '../schemas/contacts.schemas'
import { z } from 'zod'
import { DeepPartial } from 'typeorm'

type IContact = z.infer<typeof contactSchema>
type IContactReturn = z.infer<typeof returnContactSchema>
type IContactByUser = z.infer<typeof returnContactsByUserSchema>
type IContactUpdate = DeepPartial<IContact>

export {
    IContact,
    IContactReturn,
    IContactByUser,
    IContactUpdate
}