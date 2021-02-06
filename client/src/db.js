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
    try {
      let communes = await this.db.allDocs({ include_docs: true });
      return communes;
    } catch (error) {
      return [];
    }
  }

  async deleteCommune(id) {
    try {
      let doc = await this.db.get(id);
      let res = await this.db.remove(doc);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
}

export default DB;
