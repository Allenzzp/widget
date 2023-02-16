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
      
      tData4: "",
      sdlyData4: "",
      diffData4: "",

      showCopyConfirmed: false
    }
    this.copyTextRef = React.createRef();
  }

  handleInputChange = e => {
    const target = e.target;
    const {value, name} = target;

    this.setState({
      [name]: parseFloat(value)
    })
  }

  calculateMath = (num1, num2) => {
    return (Math.round((num1/ num2 - 1) * 1000)/ 10).toFixed(2);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {tSale, sdlySale, tData1, tData2, tData3, tData4, sdlyData1, sdlyData2, sdlyData3, sdlyData4 } = this.state;
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
    } else {
      this.setState( {
        diffData1: ""
      })
    }

    if ((tData2 && tData2 !== 0) && (sdlyData2 && sdlyData2 !== 0)) {
      this.setState({
        diffData2: this.calculateMath(tData2, sdlyData2)
      })
    } else {
      this.setState( {
        diffData2: ""
      })
    }

    if ((tData3 && tData3 !== 0) && (sdlyData3 && sdlyData3 !== 0)) {
      this.setState({
        diffData3: this.calculateMath(tData3, sdlyData3)
      })
    } else {
      this.setState( {
        diffData3: ""
      })
    }

    if ((tData4 && tData4 !== 0) && (sdlyData4 && sdlyData4 !== 0)) {
      this.setState({
        diffData4: this.calculateMath(tData4, sdlyData4)
      })
    } else {
      this.setState( {
        diffData4: ""
      })
    }
  }

  handleClick2Copy = () => {
    const copyText = this.copyTextRef.current.innerText;
    const hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("value", copyText);
    document.body.appendChild(hiddenInput);
    hiddenInput.select();
    document.execCommand("copy");
    document.body.removeChild(hiddenInput);
    this.setState({
      showCopyConfirmed: true
    })

    setTimeout(() => {
      this.setState({
        showCopyConfirmed: false
      })
    }, 3000);
  };

  generateClosingText = () => {
    const {diffSale, diffData1, diffData2, diffData3, diffData4} = this.state;
    let closingText = "";
    if (diffSale) {
      closingText += `Sales: $${this.state.tSale} (${diffSale > 0? "+" : ""}${diffSale + "%"} LY);`;
    }
    if (diffData1) {
      closingText += ` Traffic: ${this.state.tData1} (${diffData1 > 0? "+" : ""}${diffData1 + "%"} LY);`;
    }
    if (diffData2) {
      closingText += ` Conversion: ${this.state.tData2} (${diffData2 > 0? "+" : ""}${diffData2 + "%"} LY);`;
    }
    if (diffData3) {
      closingText += ` UPT: ${this.state.tData3} (${diffData3 > 0? "+" : ""}${diffData3 + "%"} LY);`;
    }
    if (diffData4) {
      closingText += ` ADT: ${this.state.tData4} (${diffData4 > 0? "+" : ""}${diffData4 + "%"} LY).`;
    }
    return closingText;
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
              <td>{this.state.diffSale + "%"}</td>
            </tr>
            <tr>
              <th>Traffic</th>
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
              <td>{this.state.diffData1 + "%"}</td>
            </tr>
            <tr>
              <th>Conversion</th>
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
              <td>{this.state.diffData2 + "%"}</td>
            </tr>

            <tr>
              <th>UPT</th>
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
              <td>{this.state.diffData3 + "%"}</td>
            </tr>

            <tr>
              <th>ADT</th>
              <td>
                <input
                  type="number"
                  name="tData4"
                  value={this.state.tData4}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="sdlyData4"
                  value={this.state.sdlyData4}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>{this.state.diffData4 + "%"}</td>
            </tr>

          </tbody>
        </table>
        

        <button onClick={this.handleSubmit}>Submit</button>
        <br />
        <p 
          ref={this.copyTextRef}
        >
          {this.generateClosingText()}
        </p>
        <button 
          onClick={this.handleClick2Copy}
        >
          { this.state.showCopyConfirmed? "Copied!" : "Copy Now" }
        </button>
      </div>
    );
  }
}

export default CalForm;
