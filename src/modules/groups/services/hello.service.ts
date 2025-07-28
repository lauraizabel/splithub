import { injectable } from 'inversify';

@injectable()
export class HelloService {
  sayHello() {
    return 'Hello, DI com Inversify!';
  }
} 