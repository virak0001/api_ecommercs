import { AppLogger } from 'libs/core/src/app.logger';

import { AppDispatcher } from './app.dispatcher';

const logger = new AppLogger('Index');

logger.log('Start');

const dispatcher = new AppDispatcher();
dispatcher
  .dispatch()
  .then(() => logger.log('Everything up'))
  .catch((e) => {
    logger.error(e.message, e.stack);
    process.exit(1);
  });
