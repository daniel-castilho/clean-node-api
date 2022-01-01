import { AddAccountModel } from '@/domain/usecases/add-account'
import { AddAccountRepository } from '@/data/protocols/add-account-repository'
import { MongoHelper } from '../helpers/mongo-helpers'
import { AccountModel } from '@/data/usecases/add-account/db-add-account-protocols'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const id = result.insertedId
    const accountModel: AccountModel = {
      id: id.toString(),
      name: accountData.name,
      email: accountData.email,
      password: accountData.password
    }
    return accountModel
  }
}
