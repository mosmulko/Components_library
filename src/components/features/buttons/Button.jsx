import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button 
      className={'button button-' + props.text}
      onClick={props.onClick}>
      {props.text}
    </button>)
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}