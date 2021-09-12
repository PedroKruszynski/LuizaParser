import { injectable, inject } from 'tsyringe';

import { IGame } from '@modules/gameLogParser/dtos/IGameLogDTO';

import ILogProvider from '../providers/LogProvider/models/ILogProvider';

@injectable()
class GameService {
    constructor(
        @inject('LogProvider')
        private logProvider: ILogProvider,
    ) {}

    public async execute(gameName: string): Promise<IGame> {
        const games = await this.logProvider.parserLog();
        return games[gameName];
    }
}

export default GameService;
