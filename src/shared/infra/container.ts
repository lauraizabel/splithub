import { Container } from 'inversify';
import { HelloService } from '@/modules/groups/services/hello.service';

const container = new Container();

container.bind(HelloService).toSelf();

export { container }; 