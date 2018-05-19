import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function BoilingVerdict(props) {
  if (props.celsium >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

function toCelsium(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsium) {
  return (celsium * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsium',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}/>
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiumChange = this.handleCelsiumChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiumChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render () {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsium = scale === 'f' ? tryConvert(temperature, toCelsium) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsium}
          onTemperatureChange={this.handleCelsiumChange}/>

        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>

        <BoilingVerdict celsium={parseFloat(celsium)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
