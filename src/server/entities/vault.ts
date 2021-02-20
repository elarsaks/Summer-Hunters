import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm'
import { Authorized, ObjectType, ID, Field } from 'type-graphql'

@Entity()
@ObjectType()
export class Vault {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  publicGoods: string

  @Authorized('PRIVATE')
  @Field()
  @Column()
  privateGoods: string

  @Authorized('PRIVATE', 'EXCLUSIVE')
  @Field()
  @Column()
  exclusiveGoods: string

  //☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*
  @Authorized('PRIVATE', 'EXCLUSIVE', 'SECRET')
  @Field()
  @Column()
  treasures: string
}
