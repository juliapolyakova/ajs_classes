import Bowman from '../src/Bowman';
import Daemon from '../src/Daemon';
import Magician from '../src/Magician';
import Swordsman from '../src/Swordsman';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';


test('Создание персонажа Bowman', () => {
  const expected = {
    name: 'Fro',
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  const received = new Bowman('Fro');

  expect(received).toEqual(expected);
});

test('Создание персонажа Daemon', () => {
  const expected = {
    name: 'Fro',
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  const received = new Daemon('Fro');

  expect(received).toEqual(expected);
});

test('Создание персонажа Magician', () => {
  const expected = {
    name: 'Fro',
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  const received = new Magician('Fro');

  expect(received).toEqual(expected);
});

test('Создание персонажа Swordsman', () => {
  const expected = {
    name: 'Fro',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  const received = new Swordsman('Fro');

  expect(received).toEqual(expected);
});

test('Создание персонажа Undead', () => {
  const expected = {
    name: 'Fro',
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  const received = new Undead('Fro');

  expect(received).toEqual(expected);
});

test('Создание персонажа Zombie', () => {
  const expected = {
    name: 'Fro',
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  const received = new Zombie('Fro');

  expect(received).toEqual(expected);
});
