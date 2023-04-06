import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne
} from 'typeorm'
import { User } from './user.entity'

@Entity('contacts')
class Contact {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    firstName: string

    @Column({ length: 45 })
    lastName: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ length: 11})
    phone: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: string | Date

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @ManyToOne(() => User, {cascade: true})
    user: User

}

export {
    Contact
}