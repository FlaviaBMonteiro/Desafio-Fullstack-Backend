import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../errors'

const ensureEmailAlreadyRegisteredMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if("email" in req.body)
    {
        const alreadyMail: User | null = await userRepository.findOneBy({
            email: req.body.email
        })
    
        if(alreadyMail){
            throw new AppError('Email already exists', 409)
        }
    
    }

   

    return next()

}

export default ensureEmailAlreadyRegisteredMiddleware