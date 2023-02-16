import React, { Component } from "react";

class InputBox extends Component {
  render() {
    <tr>
      <th>{this.props.inputBoxName}</th>
      <td>
        <input
          type="text"
          name="tSale"
          value={this.state.tSale}
          onChange={this.handleInputChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="sdlySale"
          value={this.state.sdlySale}
          onChange={this.handleInputChange}
        />
      </td>
      <td>{this.state.diffSale}</td>
    </tr>
  }
}

export default InputBox;