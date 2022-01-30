import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,

  async connect (url: string): Promise<void> {
    this.connection = await MongoClient.connect(process.env.MONGO_URL)
  },

  async disconnect (): Promise<void> {
    await this.connection.close()
  },

  getCollection (name: string): Collection {
    return this.connection.db().collection(name)
  },

  map: (id: any, collection: any): any => {
    return Object.assign({}, collection, { id: id.toString() })
  }
}
