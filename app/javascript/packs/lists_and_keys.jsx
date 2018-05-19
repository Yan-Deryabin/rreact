import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function ListItem(props) {
  return(<li>{props.value}</li>);
}

function NumberList(props) {
  const numbers = props.numbers;

  return(
    <ul>
      {numbers.map((number) =>
        <ListItem value={number} key={number.toString()} />
      )}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
