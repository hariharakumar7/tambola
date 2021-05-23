import Block from "./Block";
import React from "react";
import "./Board.css";

class Board extends React.Component {
  render() {
    const BlockElements = [];
    let revealedValues = this.props.value.split(",").map(function (value) {
      return value.trim();
    });
    function renderBlocks() {
      for (let i = 0; i < 9; i++) {
        for (let j = 1; j <= 10; j++) {
          const currValue = i * 10 + j;

          if (revealedValues.indexOf(currValue + "") !== -1) {
            BlockElements.push(<Block value={i * 10 + j + ",n"} />);
          } else {
            BlockElements.push(<Block value={i * 10 + j + ",y"} />);
          }
        }
      }
      return BlockElements;
    }
    return <div className="Board">{renderBlocks()}</div>;
  }
}

export default Board;
