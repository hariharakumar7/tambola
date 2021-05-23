import React from "react";
import "./Block.css";

class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="Block"
        style={{
          backgroundColor:
            this.props.value.split(",")[1] === "n" ? "#ececec" : "#fff",
        }}
      >
        <p>{this.props.value.split(",")[0]}</p>
      </div>
    );
  }
}

export default Block;
