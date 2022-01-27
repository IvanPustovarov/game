const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const stepCreator = (count, matrix) => {
  const SIZE = 3;
  const DIRECTIONS = 4;

  let initialPoint = { x: getRandomInt(SIZE), y: getRandomInt(SIZE) };

  const directionsArray = [];
  let innerCount = 0;

  const finalPoint = Object.assign({}, initialPoint);

  const directions = {
    0: "up",
    1: "right",
    2: "down",
    3: "left",
  };

  const iteration = (way) => {
    directionsArray.push(way);
    innerCount += 1;
  };

  while (innerCount < count) {
    const direction = getRandomInt(DIRECTIONS);
    const way = directions[direction];
    switch (way) {
      case "up":
        initialPoint.y++;
        if (initialPoint.y < matrix) {
          iteration(way);
          break;
        }
        initialPoint.y--;
        break;
      case "down":
        initialPoint.y--;
        if (initialPoint.y >= 0) {
          iteration(way);
          break;
        }
        initialPoint.y++;
        break;
      case "right":
        initialPoint.x--;
        if (initialPoint.x >= 0) {
          iteration(way);
          break;
        }
        initialPoint.x++;
        break;
      case "left":
        initialPoint.x++;
        if (initialPoint.x < matrix) {
          iteration(way);
          break;
        }
        initialPoint.x--;
        break;

      default:
        break;
    }
  }
  return { initialPoint, directionsArray, finalPoint };
};

export { stepCreator };
export { getRandomInt };
