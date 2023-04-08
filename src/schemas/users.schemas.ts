import { nullable, z } from 'zod'
import { hashSync } from 'bcryptjs'

const userSchema = z.object({
    
    email: z.string().email().min(10).max(45).toLowerCase(),
    password: z.string().min(4).max(20).transform((pass) => {
        return hashSync(pass, 10)
    }),
    name: z.string().min(3).max(45),
    phone: z.string().min(10).max(11).trim(),
    imgURL: z.string().url().regex(/\.(jpeg|jpg|gif|png)$/i, 'Invalid image type').or(z.string().length(0).default(""))
})

const userUpdateSchema = userSchema.partial()

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
}).omit({password: true})


const returnMultipleUserSchema = returnUserSchema.array()

export {
    userSchema,
    userUpdateSchema,
    returnUserSchema,
    returnMultipleUserSchema,
   
}