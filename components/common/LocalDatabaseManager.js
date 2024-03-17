// LocalDatabaseManager.js
import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase({ name: 'mydb.db', createFromLocation: 1 });

class LocalDatabaseManager {
  static async initializeDatabase() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS vehicles (id INTEGER PRIMARY KEY AUTOINCREMENT, vehicle_registration TEXT)',
          [],
          () => {
            console.log('Database initialized successfully');
            resolve();
          },
          error => {
            console.log('Error initializing database:', error);
            reject(error);
          }
        );
      });
    });
  }

  static async insertData(vehicleRegistration) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO vehicles (vehicle_registration) VALUES (?)',
          [vehicleRegistration],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              console.log('Data inserted successfully');
              resolve(true);
            } else {
              console.log('Failed to insert data');
              resolve(false);
            }
          },
          error => {
            console.log('Error inserting data:', error);
            reject(error);
          }
        );
      });
    });
  }

  static async getAllData() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM vehicles',
          [],
          (_, { rows }) => {
            const data = rows.raw();
            console.log('All data:', data);
            resolve(data);
          },
          error => {
            console.log('Error fetching data:', error);
            reject(error);
          }
        );
      });
    });
  }
}

export default LocalDatabaseManager;
