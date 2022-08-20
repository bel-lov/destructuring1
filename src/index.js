// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон',
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//       // <- обратите внимание, описание "засекречено"
//     },
//   ],
// };
export default function destructuring(object) {
  const resultArray = [];
  for (const i in object.special) {
    const {
      id, name, icon, description,
    } = object.special[i];
    if (description === undefined) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = object.special[i];
      resultArray.push(id, icon, description, name);
    } else {
      resultArray.push(id, icon, description, name);
    }
  }
  return resultArray;
}
// console.log(destructuring(character));
