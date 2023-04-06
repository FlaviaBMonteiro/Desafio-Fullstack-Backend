import { Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../errors'

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const loggedUser = req.user.id
    const requestUser = parseInt(req.params.id)

    if(loggedUser !== requestUser){
        throw new AppError('Forbidden', 403)
    }

    return next()

}

export default ensureIsOwnerMiddleware