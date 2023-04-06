import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Contact } from '../entities'
import { AppError } from '../errors'

const ensureContactAlreadyRegisteredMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    if("email" in req.body)
    {
        const alreadyMail: Contact | null = await contactRepository.findOneBy({
            email: req.body.email
        })
    
        if(alreadyMail){
            throw new AppError('Email contact already exists', 409)
        }
    
    }

   

    return next()

}

export default ensureContactAlreadyRegisteredMiddleware