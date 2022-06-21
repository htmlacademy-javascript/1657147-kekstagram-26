const getRandomInt = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Диапазон введен некорректно';
};

const checkLength = (string, maxLength) => string.length <= maxLength;

getRandomInt();
checkLength();
