import { Router } from 'express';

import authenticationRouter from '@modules/authentication/infra/http/routes/authentication.routes';
import logParserRouter from '@modules/gameLogParser/infra/http/routes/logParser.routes';

const routes = Router();

routes.use('/auth', authenticationRouter);
routes.use('/log', logParserRouter);

export default routes;
