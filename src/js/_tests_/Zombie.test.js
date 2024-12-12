import Character from '../Zombie';

// eslint-disable-next-line no-undef
test('Верный ввод Zombie', () => {
    const received = new Character('Roma', 'Zombie');
    const expected = {
        name: 'Roma',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});