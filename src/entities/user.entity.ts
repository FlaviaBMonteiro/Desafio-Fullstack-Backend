import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany
} from 'typeorm'
import { Contact } from './contact.entity'


@Entity('users')
class User {

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

    @Column({ length: 120 })
    password: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]

}

export {
    User
}