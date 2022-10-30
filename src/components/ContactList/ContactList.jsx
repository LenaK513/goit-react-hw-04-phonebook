import React from 'react';
// import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ contacts, onGenerateList }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li
          key={contact}
          // name={name}
          // number={number}
          onSubmit={onGenerateList}
        >
          {contact}
        </li>
      ))}
    </ul>
  );
};
