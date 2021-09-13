import GameService from './GameService';

import FakeLogProvider from '../providers/LogProvider/fakes/FakeLogProvider';

describe('LogParser', () => {
    it('should be able to parse the log of games and return only one game by name', async () => {
        const fakeLogProvider = new FakeLogProvider();

        const game = new GameService(
            fakeLogProvider
        );

        const response = await game.execute('game_1');

        expect(response).toMatchObject({
            'kills': {
                'Isgalamido': expect.any(Number)
            },
            'players': [
                expect.any(String)
            ],
            'total_kills': expect.any(Number)
        });
    });
});
