import 'reflect-metadata';

import { injectable, inject } from 'tsyringe';

import { IGame } from '@modules/gameLogParser/dtos/IGameLogDTO';

import ILogProvider from '../providers/LogProvider/models/ILogProvider';

import AppError from '@shared/errors/AppError';

@injectable()
class GameService {
    constructor(
        @inject('LogProvider')
        private logProvider: ILogProvider,
    ) {}

    public async execute(gameName: string): Promise<IGame> {
        const games = await this.logProvider.parserLog();

        if (games[gameName] === undefined) {
            throw new AppError('gameName not existing on log', 406);
        }

        return games[gameName];
    }
}

export default GameService;
