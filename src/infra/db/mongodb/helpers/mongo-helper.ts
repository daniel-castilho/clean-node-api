import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.connection = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.connection.close()
    this.connection = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.connection?.isConnected) {
      await this.connect(this.uri)
    }
    return this.connection.db().collection(name)
  },

  map: (id: any, data: any): any => {
    const { _id, ...rest } = data
    return { ...rest, id: _id.toHexString() }
  }
}
