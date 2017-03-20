import { AbstractClassError, UnimplementedError } from 'metallic-errors'

export default class FactoryInterface {
  constructor () {
    if (new.target === FactoryInterface) {
      throw new AbstractClassError(FactoryInterface.name)
    }
  }

  static create () {
    throw new UnimplementedError()
  }
}
