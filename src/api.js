const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const createSteps = (stepNumber) => {
  const SIZE = 3;
  const DIRECTIONS = 4;

  const initialPoint = { x: getRandomInt(SIZE), y: getRandomInt(SIZE) };

  const directionsArray = [];
  const finalPoint = Object.assign({}, initialPoint);

  const directions = {
    0: "up",
    1: "right",
    2: "down",
    3: "left",
  };

  const iteration = (way) => {
    directionsArray.push(way);
  };

  const getRandomDirection = ()=> {
    const direction = getRandomInt(DIRECTIONS);
    const way = directions[direction];
    return way;
  }

  while (directionsArray.length < stepNumber) {
    const way = getRandomDirection();
    switch (way) {
      case "up":
        initialPoint.y++;
        if (initialPoint.y < SIZE) {
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
        if (initialPoint.x < SIZE) {
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

export { createSteps };
export { getRandomInt };
