import React, { Component } from 'react';
import PageTitle from '../../components/PageTitle';

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <PageTitle title='Зарплата' />
      </div>
    );
  }
}

export default Salary;
