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

    @Column({ length: 45, unique: true })
    email: string

    @Column({ length: 60 })
    name: string

    @Column({ length: 11})
    phone: string

    @Column( {type: "varchar", nullable:true })
    imgURL: string

    @Column( {default: false})
    isFavorite: boolean

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