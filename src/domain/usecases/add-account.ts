import { AccountModel } from '../../data/usecases/add-account/db-add-account-protocols'

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
