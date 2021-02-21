import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm'
import { ObjectType, ID, Field, Authorized } from 'type-graphql'

@Entity()
@ObjectType()
export class Vault {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id!: number

  //☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*
  @Authorized('1', '2', '3')
  @Field()
  @Column()
  treasures: string
}
