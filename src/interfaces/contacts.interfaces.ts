import {
    contactSchema,     
    contactNoUserUSchema,
    contactUpdateSchema,
    returnContactSchema,
    returnContactNoUserSchema,
    returnContactsByUserSchema

} from '../schemas/contacts.schemas'
import { z } from 'zod'
import { DeepPartial } from 'typeorm'

type IContact = z.infer<typeof contactSchema>
type IContactNotUser = z.infer<typeof contactNoUserUSchema>
type IContactReturn = z.infer<typeof returnContactSchema>
type IContactReturnNotUser = z.infer<typeof returnContactNoUserSchema>
type IContactByUser = z.infer<typeof returnContactsByUserSchema>
type IContactUpdate = DeepPartial<IContactNotUser>



export {
    IContact,
    IContactNotUser,
    IContactReturn,
    IContactReturnNotUser,
    IContactByUser,
    IContactUpdate
}