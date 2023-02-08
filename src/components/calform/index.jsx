import React, {Component} from "react";

class CalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tSale: "",
      sdlySale: "",
      diffSale: "",

      tData1: "",
      sdlyData1: "",
      diffData1: "",

      tData2: "",
      sdlyData2: "",
      diffData2: "",

      tData3: "",
      sdlyData3: "",
      diffData3: "",
    }
  }

  handleInputChange = e => {
    const target = e.target;
    const {value, name} = target;

    this.setState({
      [name]: parseFloat(value)
    })
  }

  calculateMath = (num1, num2) => {
    return (Math.round((num1/ num2 - 1) * 1000)/ 10).toFixed(2) + "%";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {tSale, sdlySale, tData1, tData2, tData3, sdlyData1, sdlyData2, sdlyData3 } = this.state;
    if ((tSale && tSale !== 0) && (sdlySale &&sdlySale !== 0)) {
      this.setState({
        diffSale: this.calculateMath(tSale, sdlySale)
      })
    } else {
      this.setState( {
        diffSale: ""
      })
    }
    
    if ((tData1 && tData1 !== 0) && (sdlyData1 && sdlyData1 !== 0)) {
      this.setState({
        diffData1: this.calculateMath(tData1, sdlyData1)
      })
    }
    if ((tData2 && tData2 !== 0) && (sdlyData2 && sdlyData2 !== 0)) {
      this.setState({
        diffData2: this.calculateMath(tData2, sdlyData2)
      })
    }
    if ((tData3 && tData3 !== 0) && (sdlyData3 && sdlyData3 !== 0)) {
      this.setState({
        diffData3: this.calculateMath(tData3, sdlyData3)
      })
    }
  }
  
  render() {
    return (
      <div>
        <table>
          <thead>
            <th></th>
            <th>Today</th>
            <th>Same Day Last Year</th>
            <th>Diff</th>
          </thead>
          <tbody>
            <tr>
              <th>Sales</th>
              <td>
                <input
                  type="number"
                  step="0.01"
                  name="tSale"
                  value={this.state.tSale}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="sdlySale"
                  value={this.state.sdlySale}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>{this.state.diffSale}</td>
            </tr>
            <tr>
              <th>Data1</th>
              <td>
                <input
                  type="number"
                  name="tData1"
                  value={this.state.tData1}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="sdlyData1"
                  value={this.state.sdlyData1}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>{this.state.diffData1}</td>
            </tr>
            <tr>
              <th>Data2</th>
              <td>
                <input
                  type="number"
                  name="tData2"
                  value={this.state.tData2}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="sdlyData2"
                  value={this.state.sdlyData2}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>{this.state.diffData2}</td>
            </tr>
            <tr>
              <th>Data3</th>
              <td>
                <input
                  type="number"
                  name="tData3"
                  value={this.state.tData3}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="sdlyData3"
                  value={this.state.sdlyData3}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>{this.state.diffData3}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default CalForm;
