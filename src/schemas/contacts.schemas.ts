import { z } from 'zod'
import { returnUserSchema } from './users.schemas'


const contactSchema = z.object({   
    email: z.string().email().min(10).max(60).toLowerCase(), 
    name: z.string().min(6).max(60),    
    phone: z.string().trim().min(10).max(11),
    imgURL: z.string().url().regex(/\.(jpeg|jpg|gif|png)$/i, 'Invalid image type').or(z.string().length(0).default("")),
    isFavorite: z.boolean().default(false),
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