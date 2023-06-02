import Team from '../app/team.js';
import Character from '../app/character.js';

test('01 Team.add: Проверка корректного добавления в команду', () => {
  const pers1 = new Character('pers1', 'bowerman');
  const pers2 = new Character('pers2', 'magician');
  const pers3 = new Character('pers3', 'undead');
  const result = new Set([pers1, pers2, pers3]);

  const team = new Team();
  team.add(pers1);
  team.add(pers2);
  team.add(pers3);

  expect(team.members).toEqual(result);
});

test('02 Team.add: Проверка вывода ошибки при дублировании', () => {
  const pers1 = new Character('pers1', 'bowerman');
  const team = new Team();
  function result() {
    team.add(pers1);
    // При попытке повторного добавления персонажа в команду, должна возникнуть ошибка
    team.add(pers1);
  }

  expect(result).toThrow(Error); // Проверка типа ошибки
  expect(result).toThrow('Данный персонаж уже в команде'); // Проверка текста ошибки
});

test('03 Team.addAll: Проверка корректного добавления в команду', () => {
  const pers1 = new Character('pers1', 'bowerman');
  const pers2 = new Character('pers2', 'magician');
  const pers3 = new Character('pers3', 'undead');
  const result = new Set([pers1, pers2, pers3]);

  const team = new Team();
  team.addAll(pers1, pers2, pers3);

  expect(team.members).toEqual(result);
});

test('04 Team.addAll: Проверка корректного добавления в команду (с дублями)', () => {
  const pers1 = new Character('pers1', 'bowerman');
  const pers2 = new Character('pers2', 'magician');
  const pers3 = new Character('pers3', 'undead');
  const result = new Set([pers1, pers2, pers3]);

  const team = new Team();
  team.addAll(pers1, pers2, pers3, pers1, pers3);

  expect(team.members).toEqual(result);
});

test('05 Team.toArray: Проверка корректности конвертации Set в массив', () => {
  const pers1 = new Character('pers1', 'bowerman');
  const pers2 = new Character('pers2', 'magician');
  const pers3 = new Character('pers3', 'undead');
  const result = [pers1, pers2, pers3];

  const team = new Team();
  team.addAll(pers1, pers2, pers3);

  expect(team.toArray()).toEqual(result);
});
