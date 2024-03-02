// import { v4 } from 'uuid'
// import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core'

// export interface IOwner {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// @Entity({ tableName: 'owners' })
// export class Owner extends BaseEntity<Owner, 'id'> implements IOwner {
//   @PrimaryKey({ columnType: 'uuid' })
//   id = v4()

//   @Property({ fieldName: 'first_name', columnType: 'text' })
//   firstName: string

//   @Property({ fieldName: 'last_name', columnType: 'text' })
//   lastName: string

//   @Property({ fieldName: 'age', columnType: 'integer' })
//   age: number

//   @Property({ fieldName: 'created_at', columnType: 'timestamptz' })
//   createdAt: Date = new Date()

//   @Property({
//     fieldName: 'updated_at',
//     columnType: 'timestamptz',
//     onUpdate: () => new Date(),
//   })
//   updatedAt: Date = new Date()
// }