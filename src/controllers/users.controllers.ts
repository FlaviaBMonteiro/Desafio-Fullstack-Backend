import { Request, Response } from "express"
import { IUser, IUserUpdate } from "../interfaces/users.interfaces"
import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import updateUserService from "../services/users/updateUser.service"
import gettUserService from "../services/users/getUser.service"

const createUserController = async (req: Request, res: Response) => {
	const userData: IUser = req.body
	const newUser = await createUserService(userData)

	return res.status(201).json(newUser)
}

const getUserController = async (req: Request, res: Response): Promise<Response> => {
	const userEmail: string = req.params.email

	const user = await gettUserService(userEmail)

	return res.json(user)
}

const deleteUserController = async (req: Request, res: Response) => {
	await deleteUserService(parseInt(req.params.id))

	return res.status(204).send()
}

const updateUserController = async (req: Request, res: Response) => {
	const userData: IUserUpdate = req.body
	const idUser = parseInt(req.params.id)

	const updatedUser = await updateUserService(userData, idUser)

	return res.json(updatedUser)
}

export { createUserController, getUserController, deleteUserController, updateUserController }
