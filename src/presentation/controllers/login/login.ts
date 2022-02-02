import { Controller, EmailValidator, HttpRequest, HttpResponse } from './login-protocols'
import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!httpRequest.body.password) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }

    this.emailValidator.isValid(httpRequest.body.email)
    // try {
    //   const requiredFields = ['email', 'password']
    //   for (const field of requiredFields) {
    //     if (!httpRequest.body[field]) {
    //       return badRequest(new MissingParamError(field))
    //     }
    //   }
    //   const { name, email, password, passwordConfirmation } = httpRequest.body
    //   const account = await this.addAccount.add({
    //     name,
    //     email,
    //     password
    //   })
    //   const isValid = this.emailValidator.isValid(email)
    //   if (!isValid) {
    //     return badRequest(new InvalidParamError('email'))
    //   }
    //   if (password !== passwordConfirmation) {
    //     return badRequest(new InvalidParamError('passwordConfirmation'))
    //   }
    //   return ok(account)
    // } catch (error) {
    //   return serverError(error)
    // }
  }
}
