import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities"
import { IContactReturnNotUser, IContactUpdate } from "../../interfaces/contacts.interfaces"
import { returnContactNoUserSchema } from "../../schemas/contacts.schemas"

const updateContactService = async (newContactData: IContactUpdate, idContact: number): Promise<IContactReturnNotUser> => {

    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContactData = await contactRepository.findOneBy({
        id: idContact
    })

    const contact = contactRepository.create({  
        ...oldContactData,
        ...newContactData
        
    })

    await contactRepository.save(contact)

    const updatedContact = returnContactNoUserSchema.parse(contact)

    return updatedContact

}

export default updateContactService