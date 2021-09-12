import { Router } from 'express';

import ensureAuthenticated from '@modules/authentication/infra/http/middleware/ensureAuthenticated';
import ParserLogController from '../controllers/ParserLogController';

const logParserRouter = Router();
const parserLogController = new ParserLogController();

logParserRouter.use(ensureAuthenticated);

logParserRouter.get('/', parserLogController.allGames);

export default logParserRouter;
