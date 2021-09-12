import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import { IGames } from '@modules/gameLogParser/dtos/IGameLogDTO';

import ILogProvider from '../providers/LogProvider/models/ILogProvider';

@injectable()
class AllGamesService {
    constructor(
        @inject('LogProvider')
        private logProvider: ILogProvider,
    ) {}

    public async execute(): Promise<IGames> {
        return await this.logProvider.parserLog();
    }
}

export default AllGamesService;
