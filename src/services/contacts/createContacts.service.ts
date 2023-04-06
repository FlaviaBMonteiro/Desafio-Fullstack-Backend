import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Contact, User } from '../../entities'
import { IContactReturn,  IContact } from '../../interfaces/contacts.interfaces'
import { returnContactSchema } from '../../schemas/contacts.schemas'


const createContactsService = async (idUser: number, contactData: IContact): Promise<IContactReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const contactRespository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const user: User | null = await userRepository.findOneBy({
        id: idUser
    })

    const contact: Contact = contactRespository.create({
        ...contactData,
        user: user!
    })
    await contactRespository.save(contact)

    const returnContact = returnContactSchema.parse(contact)

    return returnContact

}

export default createContactsService