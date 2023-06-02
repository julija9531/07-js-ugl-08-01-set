export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Добавляет выбранного персонажа в команду (объект класса Character)
  add(pers) {
    if (this.members.has(pers)) {
      throw new Error('Данный персонаж уже в команде');
    } else { this.members.add(pers); }
  }

  // Добавляет произвольное количество персонажей
  addAll(...persList) {
    persList.forEach((pers) => { this.members.add(pers); });
  }

  // Конвертация Set в массив.
  toArray() {
    const result = [];
    this.members.forEach((pers) => { result.push(pers); });
    return result;
  }
}
