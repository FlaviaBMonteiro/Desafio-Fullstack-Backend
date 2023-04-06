import { z } from 'zod'
import { returnUserSchema } from './users.schemas'


const contactSchema = z.object({    
    firstName: z.string().min(3).max(45),
    lastName: z.string().min(3).max(45),
    email: z.string().email().min(10).max(45).toLowerCase(),
    phone: z.string().min(10).max(11).trim(),
    user: returnUserSchema.nullish(),
    })

const contactNoUserUSchema = contactSchema.omit({user: true})

const contactUpdateSchema = contactNoUserUSchema.partial()

const returnContactSchema = contactSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
    })

const returnContactNoUserSchema = returnContactSchema.omit({
    user: true
})

const manyContactsSchemaWithoutUser = contactSchema.omit({
        user: true
    }).array()
    
const returnContactsByUserSchema = returnUserSchema.extend({
        contacts: manyContactsSchemaWithoutUser
    })



export {
    contactSchema,
    contactNoUserUSchema,
    contactUpdateSchema,
    returnContactSchema,
    returnContactNoUserSchema,
    returnContactsByUserSchema
   
}