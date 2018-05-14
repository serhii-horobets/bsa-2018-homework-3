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
            console.log(`${this.name} is dead, health: ${this.health}`);
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

let fight = (fighter, improvedFighter, ...point) => {
    console.log('===Start the fight!!!===');
    for (let i = 0; i < point.length; i++) {
        //якщо бійці живі
        if (improvedFighter.health > 0 && fighter.health > 0) {
            console.log(`Results of the round #${i + 1}:`);
            fighter.hit(improvedFighter, point[i]);
            //якщо improvedFighter живий після отримання удару, то він б'є у відповідь
            if (improvedFighter.health > 0) {
                improvedFighter.hit(fighter, point[i]);
            }
            //якщо improvedFighter помер від удару fighter, виводимо fighter.health для завершеності "картини" (так як удару не буде і setDamage не буде викликатись)
            else {
                console.log(`${fighter.name}, health: ${fighter.health}`);
            }
        }
        //якщо хтось помер 
        if (improvedFighter.health <= 0 || fighter.health <= 0) {
            let winner = fighter.health <= 0 ? improvedFighter.name : fighter.name
            console.log(`The battle is over, ${winner} won!`);
            return;
        }
    }
    console.log('The battle is over. No deaths');
}

//Функція для рандомного (50/50) вибору того, кто перший починає бій. Будемо використовувати її у сортуванні масиву бійців arr.sort
function compareRandom() {
   /** 
    * У змінну rand генеруєм true/false
    * 0.495 тому що Math.random генерує з діапазону [0,1) , а треба щоб true/false генерувались як можна ближче до 50/50 відсотків
    * via https://books.google.com.ua/books?id=G14FCgAAQBAJ&lpg=PA91&hl=uk&pg=PA91#v=onepage&q&f=false
    */
    let rand = Math.random() > 0.495;
    if (rand) {
        return 1;
    } else {
        return -1;
    }
}

//Встановіть name, power>0, health>0 у змінних бійців
let Kombo = new Fighter('Kombat', 4, 15);
let Rambo = new ImprovedFighter('Rambo', 2, 20);

let arr = [Kombo, Rambo];
arr.sort(compareRandom); //рандомно розміщюємо бійців

//Вкажіть розмір point у раундах
fight(...arr, 2, 4, 5);











