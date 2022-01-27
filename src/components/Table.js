import React from "react";
import "../App.css";

const Table = ({ steps, final, initial }) => {
  const SIZE = 3;
  const maze = [];

  const handleClick = (id) => {
    const userAnswer = parseInt(id.target.id, 10);
    const answer = calculateId(final);
    if (userAnswer === answer) {
      id.target.className = "square answer__true";
    } else {
      id.target.className = "square answer__false";
    }
  };

  const calculateId = (point) => {
    return point.y * 3 + point.x + 1;
  };

  const renderMaze = () => {
    let id = SIZE * SIZE;
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        const title = React.createElement(
          "div",
          {
            key: id,
            className: "square",
            id: id,
            onClick: (id) => handleClick(id),
          },
          [id]
        );
        maze.push(title);
        id--;
      }
    }
    return maze;
  };

  return (
    <>
      <div className="maze">{renderMaze()}</div>
      <div className="steps">
        {steps.map((item, index) => (
          <div key={index} className="steps__item">
            {item}
          </div>
        ))}
      </div>
      <div className="result">
        initial {calculateId(initial)}
        result: {calculateId(final)}
      </div>
    </>
  );
};

export default Table;
