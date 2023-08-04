<<<<<<< HEAD
/* eslint-disable */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
=======
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) expansion1989 = 89;

  if (expansion2019 === undefined) expansion2019 = 19;
>>>>>>> bfd2142142fde05f860d4c226f9910506a3a713a
  return initialNumber + expansion1989 + expansion2019;
}


