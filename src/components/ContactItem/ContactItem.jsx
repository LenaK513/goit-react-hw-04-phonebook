import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li id={id} key={name}>
      {' '}
      {name} : {number}
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func,
};
