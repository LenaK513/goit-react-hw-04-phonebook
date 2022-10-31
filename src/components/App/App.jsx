import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitForApp = data => {
    console.log(data);

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
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmitForApp={this.formSubmitForApp} />
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type="text" value={filter} onChange={this.findNameByFilter} />
        </label>
        <ContactList
          contacts={contacts}
          onGenerateList={this.formSubmitForApp}
        />
      </Container>
    );
  }
}
export default App;
