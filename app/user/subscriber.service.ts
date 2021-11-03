// import {
//   Connection,
//   EntitySubscriberInterface,
//   EventSubscriber,
//   InsertEvent,
//   RemoveEvent,
//   UpdateEvent,
// } from 'typeorm';
// import { UserEntity } from './entities/user.entity';
// import { HashUtil } from '@libs/core/utils/hash.util';
//
// @EventSubscriber()
// export class SubscriberService
//   implements EntitySubscriberInterface<UserEntity>
// {
//   constructor(connection: Connection) {
//     connection.subscribers.push(this);
//   }
//
//   listenTo() {
//     return UserEntity;
//   }
//
//   beforeInsert(event: InsertEvent<UserEntity>) {
//     if (event.entity.password) {
//       event.entity.password = HashUtil.generateHash(event.entity.password);
//     } else {
//     }
//   }
//
//   beforeUpdate(event: UpdateEvent<UserEntity>) {
//     try {
//       if (
//         event.entity.password &&
//         event.entity.password !== event.databaseEntity.password
//       ) {
//         event.entity.password = HashUtil.generateHash(event.entity.password);
//       }
//     } catch (e) {
//       // TODO
//     }
//   }
//
//   afterRemove(event: RemoveEvent<UserEntity>) {
//     console.info(event);
//   }
// }
