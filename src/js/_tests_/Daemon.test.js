import Character from '../Daemon';

// eslint-disable-next-line no-undef
test('Верный ввод Daemon', () => {
    const received = new Character('Roma', 'Daemon');
    const expected = {
        name: 'Roma',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});