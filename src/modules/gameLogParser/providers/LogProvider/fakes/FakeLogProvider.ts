import ILogProvider from '../models/ILogProvider';

import { IGames } from '@modules/gameLogParser/dtos/IGameLogDTO';

class FakeLogProvider implements ILogProvider {
    public async parserLog(): Promise<IGames> {
        return {
            "game_1": {
              "total_kills": 0,
              "players": [
                "Isgalamido"
              ],
              "kills": {
                "Isgalamido": 0
              }
            },
            "game_2": {
              "total_kills": 11,
              "players": [
                "Isgalamido",
                "Dono da Bola",
                "Mocinha"
              ],
              "kills": {
                "Isgalamido": -7,
                "Dono da Bola": 0,
                "Mocinha": 0
              }
            },
            "game_3": {
              "total_kills": 4,
              "players": [
                "Dono da Bola",
                "Mocinha",
                "Isgalamido",
                "Zeh"
              ],
              "kills": {
                "Dono da Bola": -1,
                "Mocinha": 0,
                "Isgalamido": 1,
                "Zeh": -2
              }
            }
        }
    }
}

export default FakeLogProvider;
