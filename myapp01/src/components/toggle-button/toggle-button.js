import React, { Component } from "react";

class ToggleButton extends Component {
  constructor({ initialChecked }) {
    super();
    this.state = { checked: initialChecked };
  }

  onTextChanged() {
    const newState = !this.state.checked;
    this.setState({ checked: newState }); // update the state
    this.props.mycallbackParent(newState); //  notify the parent
  }

  render() {
    return (
      <label>
        {this.props.text}:{" "}
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={() => this.onTextChanged()}
        />
      </label>
    );
  }
}

export default ToggleButton;