import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AllGamesService from '@modules/gameLogParser/services/AllGamesService';
import GameService from '@modules/gameLogParser/services/GameService';

export default class ParserLogController {
    public async allGames(
        request: Request,
        response: Response,
    ): Promise<Response> {

        const allGames = container.resolve(AllGamesService);

        const games = await allGames.execute();

        return response.json(games);
    }

    public async game(
        request: Request,
        response: Response,
    ): Promise<Response> {

        const { gameName } = request.params;

        const game = container.resolve(GameService);

        const games = await game.execute(gameName);

        return response.json(games);
    }
}
