import { Request, Response } from 'express'
import { ICreateContact } from '../interfaces/contacts.interfaces'
import createContactsService from '../services/contacts/createContacts.service'
import listContactByUserService from '../services/contacts/listContactByUser.service'



const createContactsController = async (req: Request, res: Response): Promise<Response> => {
    const idUser: number = req.user.id
    const contactData: ICreateContact = req.body

    const newContact = await createContactsService(idUser, contactData)

    return res.status(201).json(newContact)
    
}

const listContactByUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = parseInt(req.params.id)

    const posts = await listContactByUserService(userId)

    return res.json(posts)
}


export {
    createContactsController,
    listContactByUserController
}