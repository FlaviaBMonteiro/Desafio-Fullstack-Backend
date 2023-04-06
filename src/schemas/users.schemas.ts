import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const userSchema = z.object({
    firstName: z.string().min(3).max(45),
    lastName: z.string().min(3).max(45),
    email: z.string().email().min(10).max(45),
    phone: z.string().min(10).max(11).trim(),
    password: z.string().min(4).max(20).transform((pass) => {
        return hashSync(pass, 10)
    }),})

const userUpdateSchema = userSchema.partial()

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true})

const returnMultipleUserSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    returnMultipleUserSchema,
    userUpdateSchema
}