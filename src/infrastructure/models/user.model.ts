import { Roles } from "src/domain/interfaces/enums"
import { Column, PrimaryGeneratedColumn } from "typeorm"

export class UserModel{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name:string

    @Column({unique: true})
    email: string

    @Column({enum: Roles})
    role: Roles

    @Column({default: true})
    isActive: boolean
}