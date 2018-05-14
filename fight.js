'use strict';

class Fighter {

    constructor(name = 'FighteR', power = 2, health = 40) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            console.log(`${this.name}'s health: ${this.health}`);
        } else {
            this.health = 0;
            console.log(`${this.name} is dead`);
        }
    }

    hit(enemy, point) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

}

class ImprovedFighter extends Fighter {

    constructor(name = 'IFighteR', power = 3, health = 80) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        super.hit(enemy, 2 * point);
    }

}













