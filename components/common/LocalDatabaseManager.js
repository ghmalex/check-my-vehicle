// import { Database, Model } from '@nozbe/watermelondb';
// import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
// import { Q } from '@nozbe/watermelondb';
// import { appSchema, tableSchema } from '@nozbe/watermelondb/Schema';

// // Define your schema
// const schema = appSchema({
//   version: 1,
//   tables: [
//     tableSchema({
//       name: 'search_history',
//       columns: [
//         { name: 'vehicle_registration', type: 'string' },
//         { name: 'vehicle_searched_date', type: 'string' },
//       ],
//     }),
//   ],
// });

// // Create a new WatermelonDB Database instance
// const adapter = new SQLiteAdapter({
//   schema,
// });

// const database = new Database({
//   adapter,
//   modelClasses: [SearchHistoryModel], // Define your model classes
//   actionsEnabled: true,
// });

// // Define your model class
// class SearchHistoryModel extends Model {
//   static table = 'search_history';
// }

// // Define your LocalDatabaseManager class
// export default class LocalDatabaseManager {
//   // Insert search history
//   static async insertSearchHistory(vehicleRegistration) {
//     const searchedDate = new Date().toISOString();
//     try {
//       await database.action(async (action) => {
//         const newRecord = await action.create(SearchHistoryModel, (record) => {
//           record.vehicle_registration = vehicleRegistration;
//           record.vehicle_searched_date = searchedDate;
//         });
//         console.log('Search data inserted successfully', newRecord);
//       });
//     } catch (error) {
//       console.error('Error inserting data: ', error);
//     }
//   }

//   // Select search history
//   static async selectSearchHistory(callback) {
//     try {
//       const searchData = await database.collections.get('search_history').query().fetch();
//       callback(searchData);
//     } catch (error) {
//       console.log('Error selecting data: ', error);
//       callback([]);
//     }
//   }

//   // Delete excess records
//   static async deleteExcessRecords() {
//     try {
//       await database.action(async (action) => {
//         const excessRecords = await action
//           .query(SearchHistoryModel)
//           .orderBy(Q.desc(SearchHistoryModel.id))
//           .fetch();
//         const excessRecordsToDelete = excessRecords.slice(10);
//         await action.batch(excessRecordsToDelete.map((record) => record.prepareDestroyPermanently()));
//         console.log('Excess records deleted successfully');
//       });
//     } catch (error) {
//       console.log('Error deleting records: ', error);
//     }
//   }
// }
