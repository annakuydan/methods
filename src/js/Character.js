export default class Character {
    constructor(name, type) {
        if(name.length < 2 || type.length > 10) {
            throw new Error ('Ошибка. Допускается только имена длиной от 2 символов до 10');
        }
        const typePlayers = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie'
        ];
        if(typePlayers.includes(type) === false) {
            throw new Error('Неверное значение типа персонажа!');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if(this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить уровень');
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}