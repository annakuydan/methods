import Character from '../Swordsman';

// eslint-disable-next-line no-undef
test('Верный ввод Swordsman', () => {
    const received = new Character('Roma', 'Swordsman');
    const expected = {
        name: 'Roma',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});