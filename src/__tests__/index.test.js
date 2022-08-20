import destructuring from '../index';

test('result array', () => {
    const character = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                // <- обратите внимание, описание "засекречено"
            },
        ],
    };
    const resultArray = destructuring(character);
    expect(resultArray).toEqual([8,
        'http://...',
        'Двойной выстрел наносит двойной урон',
        'Двойной выстрел',
        9,
        'http://...',
        'Описание недоступно',
        'Нокаутирующий удар']);
});
