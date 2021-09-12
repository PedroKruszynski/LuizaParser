import ILogProvider from '../models/ILogProvider';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

import { IKill, IGame, IAmountKills, IGames } from '@modules/gameLogParser/dtos/IGameLogDTO';

class LogProvider implements ILogProvider {
    public async parserLog(): Promise<IGames> {

        const path = resolve('./src/shared/assets/log/games.log');
        const logArchive = await readFile(path, 'utf8');

        const regexSepareteAllGames = new RegExp(/InitGame[\s\S]*?ShutdownGame/gm);
        const allGames = logArchive.match(regexSepareteAllGames) ?? [];

        const completedLog: IGames = {};
        allGames.forEach( ( game, indexLog ) => {

            const allUsers = this.allUsersOfGame(game);
            const allKills = this.allKillsOfGame(game);
            const killsForEachUser = this.killsOfEachUser(allKills, allUsers);

            const completeGame: IGame = {
                total_kills: allKills.length,
                players: allUsers,
                kills: killsForEachUser
            }

            indexLog++;
            completedLog[`game_${indexLog}`] = completeGame;
        });

        return completedLog;
    }

    allUsersOfGame(game: string): string[] {

        const regexUsersOfMatch = new RegExp(/(ClientUserinfoChanged).*/gm);
        const usersOfMatchNotFormated = game.match(regexUsersOfMatch) ?? [];

        const usersOfMatchWithDuplicates = usersOfMatchNotFormated.map( user => {
            const regexNameOfUser = new RegExp(/n\\[\s\S]*?\\t/gm);
            const nameRegex = user.match(regexNameOfUser) ?? [];
            const nameWithCaracter = nameRegex.shift() ?? '';
            return nameWithCaracter.replace(/n\\|\\t/gm, '');
        });

        return usersOfMatchWithDuplicates.filter( ( name, index ) => {
            return usersOfMatchWithDuplicates.indexOf(name) === index;
        });

    }

    allKillsOfGame(game: string): IKill[] {

        const regexKillsOfMatch = new RegExp(/(Kill).*/gm);
        const killsOfMatchNotFormated = game.match(regexKillsOfMatch) ?? [];

        return killsOfMatchNotFormated.map( kill => {
            const regexFormatKill = new RegExp(/(?=\d:.*?(\S.*(?=\skilled)))|(?=killed.*?(\S.*(?=\sby)))/gm);
            const killSplited = kill.split(regexFormatKill);
            const killData: IKill = {
                killer: killSplited[1],
                killed: killSplited[5]
            }
            return killData;
        });

    }

    killsOfEachUser(kills: IKill[], users: string[]): IAmountKills {

        const amountKills: IAmountKills = {};

        users.forEach( name => {
            amountKills[name] = 0;
        });

        kills.forEach( ({ killer, killed }) => {

            if (killer === killed) {
                return;
            }

            if (killer !== '<world>') {
                amountKills[killer]++
            } else {
                amountKills[killed]--
            }

        });

        return amountKills;

    }

}

export default LogProvider;
