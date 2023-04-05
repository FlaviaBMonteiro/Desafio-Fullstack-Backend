import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUsersReturn } from "../../interfaces/users.interfaces"
import { returnMultipleUserSchema } from "../../schemas/users.schemas"


const listUsersService = async (): Promise<IUsersReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find({
        // take: 3, Como se fosse LIMIT
        // skip: 0, Como se fosse OFFSET
        order: {
            id: 'ASC'
        }
    })

    const users = returnMultipleUserSchema.parse(findUsers)

    return users

}

export {
    listUsersService
}