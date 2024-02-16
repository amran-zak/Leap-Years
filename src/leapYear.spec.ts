// leapYear.spec.ts

import { leapYear } from './leapYear';

describe('Test d\'intégration pour la fonction leapYear', () => {
    test('Doit retourner true pour une année bissextile', () => {
        expect(leapYear(2020)).toBe(true); // 2020 est une année bissextile
        expect(leapYear(2000)).toBe(true); // 2000 est une année bissextile
    });

    test('Doit retourner false pour une année non bissextile', () => {
        expect(leapYear(2019)).toBe(false); // 2019 n'est pas une année bissextile
        expect(leapYear(1900)).toBe(false); // 1900 n'est pas une année bissextile car elle est divisible par 100 et pas par 400
    });

    test('Gère les années négatives', () => {
        expect(leapYear(-1)).toBe(false); // Les années négatives ne sont pas gérées, mais pour l'exemple, cela devrait retourner false
        expect(leapYear(-400)).toBe(true); // -400 serait techniquement une année bissextile si on suivait la règle
    });
});
