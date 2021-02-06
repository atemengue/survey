/** @format */

import PouchDB from 'pouchdb';

class DB {
  constructor(name) {
    this.db = new PouchDB(name);
  }

  async create_commune(data) {
    try {
      let commune = await this.db.post(data);
      return commune;
    } catch (error) {
      return error;
    }
  }

  async getAllCommunes() {
    let communes = await this.db.allDocs({ include_docs: true });
  }
}

export default DB;
