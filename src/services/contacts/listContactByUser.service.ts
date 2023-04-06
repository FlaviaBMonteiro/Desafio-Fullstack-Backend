import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { returnContactsByUserSchema } from '../../schemas/contacts.schemas'
import { IContactByUser } from '../../interfaces/contacts.interfaces'


const listContactByUserService= async(userId: number): Promise<IContactByUser> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const users = await userRepository.findOne({
        where: {
            id: userId
        },
        relations: {
            contacts: true
        }
    })

    const returnPosts = returnContactsByUserSchema.parse(users!)

    return returnPosts


}

export default listContactByUserService