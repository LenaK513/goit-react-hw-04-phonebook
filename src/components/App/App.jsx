import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const formSubmitForApp = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = contact.name.toLowerCase();
    const compareNames = contacts.find(
      contactToCompare => contactToCompare.name.toLowerCase() === normalizedName
    );

    if (compareNames) {
      alert(`${contact.name} is already in the list of contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const findNameByFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const contactsForFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  // const contactsForLS = localStorage.getItem('contacts');
  // const updatedContacts = JSON.parse(contactsForLS);
  // if (updatedContacts) {
  //   setContacts(updatedContacts);
  // }

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmitForApp={formSubmitForApp} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeForFilter={findNameByFilter} />
      <ContactList
        contacts={contactsForFilter}
        onGenerateList={formSubmitForApp}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
