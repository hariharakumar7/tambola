import "./App.css";
import React from "react";
import Board from "./Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    let numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(i);
    }
    this.state = {
      disabled: false,
      coins: numbers,
      revealedValues: "",
      currentNumber: "",
    };
  }

  handleClick = (event) => {
    if (!this.state.disabled) {
      if (this.state.coins.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.state.coins.length);
        var array = this.state.coins;
        const randomValue = this.state.coins[randomIndex];
        array.splice(randomIndex, 1);
        this.setState({ coins: array });
        const currentRevealedValues = this.state.revealedValues;
        this.setState({
          revealedValues: currentRevealedValues + randomValue + " , ",
          currentNumber: randomValue,
        });
      }
    }
    this.setState({ disabled: true });
    setTimeout(() => {
      this.setState({ disabled: false });
    }, 0);
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Tambola</h2>
        </div>
        <div className="main">
          <div className="left">
            <div className="left_header">
              <h4>Last Numbers</h4>
            </div>
            <div className="left_container">{this.state.revealedValues}</div>
          </div>
          <div className="center">
            <Board value={this.state.revealedValues} />
          </div>
          <div className="right">
            <label className="currentValue">{this.state.currentNumber}</label>
            <button className="NextNum" onClick={this.handleClick}>
              Pick next number
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
