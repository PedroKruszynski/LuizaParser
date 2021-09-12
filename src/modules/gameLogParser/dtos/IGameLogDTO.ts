export interface IKill {
    killer: string
    killed: string
}

export interface IAmountKills {
    [key: string]: number
};

export interface IGame {
    total_kills: number,
    players: string[],
    kills: IAmountKills
}

export interface IGames {
    [key: string]: IGame
}
