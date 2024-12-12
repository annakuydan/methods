import Character from '../Character';

// eslint-disable-next-line no-undef
test('class Character', () => {
    const player = new Character('Roma', 'Daemon');
    // eslint-disable-next-line no-undef
    expect(player).toEqual({
        name: 'Roma',
        type: 'Daemon',
        health: 100,
        level: 1
    });
});

// eslint-disable-next-line no-undef
test('Неверное имя', () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character('R', 'Undead')).toThrow();
});

// eslint-disable-next-line no-undef
test('Неверный тип', () => {
    // eslint-disable-next-line no-undef
    expect(() => new Character('Mark', 'noType')).toThrow();
});

// eslint-disable-next-line no-undef
test('Повышение уровня', () => {
    const player = new Character('Roma', 'Daemon');
    player.attack = 10;
    player.defence = 10;
    player.levelUp();
    // eslint-disable-next-line no-undef
    expect(player.health).toEqual(100);
    // eslint-disable-next-line no-undef
    expect(player.attack).toEqual(12);
    // eslint-disable-next-line no-undef
    expect(player.defence).toEqual(12);
    // eslint-disable-next-line no-undef
    expect(player.level).toEqual(2);
});

// eslint-disable-next-line no-undef
test('Изменение здоровья персонажа', () => {
    const player = new Character('Roma', 'Daemon');
    player.defence = 10;
    player.damage(50);
    // eslint-disable-next-line no-undef
    expect(player.health).toEqual(55);
});

// eslint-disable-next-line no-undef
test('Изменение здоровья персонажа', () => {
    const player = new Character('Roma', 'Daemon');
    player.defence = 10;
    player.damage(500);
    // eslint-disable-next-line no-undef
    expect(player.health).toEqual(0);
});