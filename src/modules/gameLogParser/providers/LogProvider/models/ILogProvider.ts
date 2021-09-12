import { IGames } from '@modules/gameLogParser/dtos/IGameLogDTO';


export default interface ILogProvider {
    parserLog(): Promise<IGames>;
}
