import React from 'react';

export const ContactItem = ({ id, name, number }) => {
  return (
    <li id={id}>
      {name} : {number}
    </li>
  );
};
