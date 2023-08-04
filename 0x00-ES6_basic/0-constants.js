<<<<<<< HEAD
/* eslint-disable*/
export function getTaskDescription() {
  const taskDescription = 'I prefer using constants whenever possible.';
  return taskDescription;
=======
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
>>>>>>> bfd2142142fde05f860d4c226f9910506a3a713a
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

