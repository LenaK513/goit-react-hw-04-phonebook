import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ contacts, onGenerateList }) => {
  return (
    <ul>
      {contacts.map(({ id, data }) => (
        <ContactItem
          id={id}
          key={data.name}
          name={data.name}
          number={data.number}
          onSubmit={onGenerateList}
        >
          {/* {name}:{number} */}
        </ContactItem>
      ))}
    </ul>
  );
};
