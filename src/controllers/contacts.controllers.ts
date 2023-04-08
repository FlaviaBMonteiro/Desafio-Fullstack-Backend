import { Request, Response } from "express"
import { IContactReturn, IContactUpdate } from "../interfaces/contacts.interfaces"
import createContactsService from "../services/contacts/createContacts.service"
import listContactByUserService from "../services/contacts/listContactByUser.service"
import deleteContactService from "../services/contacts/deleteContact.service"
import updateContactService from "../services/contacts/updateContact.service"

const createContactsController = async (req: Request, res: Response): Promise<Response> => {
	const idUser: number = req.user.id
	const contactData: IContactReturn = req.body
	const newContact = await createContactsService(idUser, contactData)

	return res.status(201).json(newContact)
}

const listContactByUserController = async (req: Request, res: Response): Promise<Response> => {
	const userId: number = parseInt(req.params.id)
	const contacts = await listContactByUserService(userId)

	return res.json(contacts)
}

const deleteContactController = async (req: Request, res: Response) => {
	await deleteContactService(parseInt(req.params.id))

	return res.status(204).send()
}

const updateContactController = async (req: Request, res: Response) => {
	const userData: IContactUpdate = req.body
	const idUser = parseInt(req.params.id)
	const updatedUser = await updateContactService(userData, idUser)

	return res.json(updatedUser)
}

export {
	createContactsController,
	listContactByUserController,
	deleteContactController,
	updateContactController,
}
