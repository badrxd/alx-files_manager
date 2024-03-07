import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const localhost = process.env.DB_HOST ? process.env.DB_HOST : 'localhost';
    const port = process.env.DB_PORT ? process.env.DB_PORT : 27017;
    const dataBase = process.env.DB_DATABASE
      ? process.env.DB_DATABASE
      : 'files_manager';
    this.url = `mongodb://${localhost}:${port}/${dataBase}`;
    this.client = new MongoClient(this.url);
  }

  isAlive() {
    return this.client.isConnected();
  }

  nbUsers(key, value) {
    this.db.set(key, value);
  }

  get(key) {
    return this.db.get(key);
  }
}
