import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "blue",
    bold: false,
    italic: false,
    underline: false
  };

  pickColor = newColor => {
    this.setState({ color: newColor });
  };

  pickStyle = newStyle => {
    let changeStyle = !this.state[newStyle];
    this.setState({ [newStyle]: changeStyle });
  };

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.pickStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.pickColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
