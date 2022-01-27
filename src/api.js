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

  const getRandomDirection = () => {
    const direction = getRandomInt(DIRECTIONS);
    const way = directions[direction];
    return way;
  };

  const up = (point) => {
    point.y++;
    if (point.y < SIZE) {
      return true;
    }
    point.y--;
    return false;
  };

  const down = (point) => {
    point.y--;
    if (point.y >= 0) {
      return true;
    }
    point.y++;
    return false;
  };

  const right = (point) => {
    point.x--;
    if (point.x >= 0) {
      return true;
    }
    point.x++;
    return false;
  };

  const left = (point) => {
    point.x++;
    if (point.x < SIZE) {
      return true;
    }
    point.x--;
    return false;
  };

  const directionChanger = {
    up: up,
    down: down,
    right: right,
    left: left,
  };

  const getPointMove = (way) => {
    if (way === "up") {
      const wayUp = directionChanger.up(initialPoint);
      if(wayUp)  directionsArray.push(way);
    }
    if (way === "down") {
      const wayDown = directionChanger.down(initialPoint);
      if(wayDown)  directionsArray.push(way);
    }
    if (way === "right") {
      const wayRight = directionChanger.right(initialPoint);
      if(wayRight)  directionsArray.push(way);
    }
    if (way === "left") {
      const wayLeft = directionChanger.left(initialPoint);
      if(wayLeft)  directionsArray.push(way);
    }
  };

  while (directionsArray.length < stepNumber) {
    const way = getRandomDirection();
    getPointMove(way);
  }
  return { initialPoint, directionsArray, finalPoint };
};

export { createSteps };
export { getRandomInt };
