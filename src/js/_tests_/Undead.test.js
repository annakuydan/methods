import Character from '../Undead';

// eslint-disable-next-line no-undef
test('Верный ввод Undead', () => {
    const received = new Character('Roma', 'Undead');
    const expected = {
        name: 'Roma',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});