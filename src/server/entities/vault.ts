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

  //@Authorized()
  @Field()
  @Column()
  privateGoods: string

  @Field()
  @Column()
  exclusiveGoods: string

  //☆.。.:*・°☆.。.:*・°☆.。.:*・°☆.。.:*
  @Field()
  @Column()
  treasures: string
}
