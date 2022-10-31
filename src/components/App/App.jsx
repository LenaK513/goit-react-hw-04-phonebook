import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from './App.styled';

let id = nanoid();
class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitForApp = data => {
    console.log(data);

    const contact = {
      id,
      data,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmitForApp={this.formSubmitForApp} />
        <h2>Contacts</h2>

        <ContactList
          contacts={this.state.contacts}
          onGenerateList={this.formSubmitForApp}
        />
      </Container>
    );
  }
}
export default App;
