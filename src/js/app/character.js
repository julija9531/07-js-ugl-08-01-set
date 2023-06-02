export const paramsTyp = {
  bowerman: { health: 100, attack: 25, defence: 25 },
  swordsman: { health: 100, attack: 40, defence: 10 },
  magician: { health: 100, attack: 10, defence: 40 },
  daemon: { health: 100, attack: 10, defence: 40 },
  undead: { health: 100, attack: 25, defence: 25 },
  zombie: { health: 100, attack: 40, defence: 10 },
};

export default class Character {
  constructor(name, type) {
    // Проверка имени
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Имя должно содержать от 2х до 10 символов!');
    }

    // Проверка класса
    if (!(type.toLowerCase() in paramsTyp)) {
      throw new Error('Класс введен некорректно!');
    }

    this.name = name;
    this.type = type.toLowerCase();
    this.health = paramsTyp[this.type].health;
    this.level = 1;
    this.attack = paramsTyp[this.type].attack;
    this.defence = paramsTyp[this.type].defence;
  }

  // Повышение уровня:
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  // Расчет полученного урона
  damage(points) {
    if (Math.round(points * (1 - this.defence / 100)) < this.health) {
      this.health -= Math.round(points * (1 - this.defence / 100));
    } else {
      this.health = 0;
    }
  }
}
