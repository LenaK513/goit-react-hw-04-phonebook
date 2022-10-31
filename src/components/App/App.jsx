import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitForApp = data => {
    console.log(data.name);

    const contact = {
      id: nanoid(),
      data,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findNameByFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const contactsForFilter = contacts.filter(contact =>
      contact.data.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmitForApp={this.formSubmitForApp} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeForFilter={this.findNameByFilter} />
        <ContactList
          contacts={contactsForFilter}
          onGenerateList={this.formSubmitForApp}
        />
      </Container>
    );
  }
}
export default App;
