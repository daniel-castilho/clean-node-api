import { AddAccountModel } from '@/domain/usecases/add-account'
import { AddAccountRepository } from '@/data/protocols/db/add-account-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { AccountModel } from '@/domain/models/account'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return MongoHelper.map(result.insertedId, accountData)
  }
}
