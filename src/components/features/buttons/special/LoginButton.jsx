import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function LoginButton({onClick}) {
  return (
    <Button 
    onClick={onClick}
    text='Login'
    />
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.func
}