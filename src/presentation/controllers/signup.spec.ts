import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password_confirmation'
      }
    }
    const httpsResponse = sut.handle(httpRequest)
    expect(httpsResponse.statusCode).toBe(400)
    expect(httpsResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password_confirmation'
      }
    }
    const httpsResponse = sut.handle(httpRequest)
    expect(httpsResponse.statusCode).toBe(400)
    expect(httpsResponse.body).toEqual(new MissingParamError('email'))
  })
})