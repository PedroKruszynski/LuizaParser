import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AllGamesService from '@modules/gameLogParser/services/AllGamesService';

export default class ParserLogController {
    public async allGames(
        request: Request,
        response: Response,
    ): Promise<Response> {

        const allGames = container.resolve(AllGamesService);

        const games = await allGames.execute();

        return response.json(games);
    }
}
