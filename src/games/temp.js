
const progression = (num, num2) => {
  const progressionArray = [];
  let j = 0;
  while (j < 11) {
    num += num2;
    j += 1;
    progressionArray.push(num);
  };
  const randomIndex = Math.floor(Math.random() * (progressionArray.length - 1));
  const checkRandom = (progressionArray[randomIndex]);
  progressionArray[randomIndex] = '..';
  const str = progressionArray.join(' ');
  return console.log(str), console.log(checkRandom);
};
progression(10,2);
