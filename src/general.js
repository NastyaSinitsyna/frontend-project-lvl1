export const getRandomInt = (floor, ceil) => {
  const min = Math.ceil(floor);
  const max = Math.floor(ceil);
  return Math.floor(Math.random() * (max - min)) + min;
};
  