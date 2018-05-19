import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Is going:
          <input
            name='isGoing'
            type='checkbox'
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name='numberOfGuests'
            type='number'
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}/>
        </label>
        <input type='submit' value='Submit'/>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
