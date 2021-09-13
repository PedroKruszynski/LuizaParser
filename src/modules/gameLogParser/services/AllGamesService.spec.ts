import AllGamesService from './AllGamesService';

import FakeLogProvider from '../providers/LogProvider/fakes/FakeLogProvider';

describe('LogParser', () => {
    it('should be able to parse the log of games', async () => {
        const fakeLogProvider = new FakeLogProvider();

        const allGames = new AllGamesService(
            fakeLogProvider
        );

        const { game_1, game_2, game_3 } = await allGames.execute();

        expect(
            Boolean(game_1) &&
            Boolean(game_2) &&
            Boolean(game_3)
        ).toBe(true);
    });
});
