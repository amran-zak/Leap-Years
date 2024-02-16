// GameOfLife.spec.ts

import { GameOfLife } from './GameOfLife';

describe('GameOfLife', () => {
    test('Doit calculer correctement la génération suivante', () => {
        const initialGrid = [
            [false, true, false],
            [false, false, true],
            [true, true, true]
        ];
        const expectedGrid = [
            [false, true, true],
            [true, true, true],
            [false, true, false]
        ];

        const game = new GameOfLife(initialGrid);
        game.computeNextGeneration();

        expect(game.getGrid()).toEqual(expectedGrid);
    });
});
