import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import '@/modules/users/controllers/user.controller';
import '@/modules/auth/controller/auth.controller';
import { InversifyExpressServer } from 'inversify-express-utils';
import { appContainer } from '@/shared/container/app.container';
import { errorHandler } from '@/shared/middleware/error.middleware';

let server = new InversifyExpressServer(appContainer);
server
  .setConfig(app => {
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.json());
  })
  .setErrorConfig(app => {
    app.use(errorHandler);
  });

let app = server.build();

app.listen(3000, () => {
  console.log('App running on port 3000');
});
