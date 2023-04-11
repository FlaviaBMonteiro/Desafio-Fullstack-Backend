import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { returnContactsByUserSchema } from "../../schemas/contacts.schemas"
import { IUserReturn } from "../../interfaces/users.interfaces"

const gettUserService = async (userEmail: string): Promise<IUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User)

	const users = await userRepository.findOne({
		where: {
			email: userEmail,
		},
		relations: {
			contacts: true,
		},
	})

	const returnPosts = returnContactsByUserSchema.parse(users!)

	return returnPosts
}

export default gettUserService
