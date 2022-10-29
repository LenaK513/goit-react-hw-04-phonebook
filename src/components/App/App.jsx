import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from '../Form/Form';
import { Container } from './App.styled';

const id = nanoid(8);
class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitForApp = data => {
    console.log(data);

    const item = {
      data: 'fghjk',
      id,
    };

    this.setState(prevState => ({ contacts: [item, ...prevState.contacts] }));
    console.log(this.state.contacts);
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmitForApp={this.formSubmitForApp} />
        <h2>Contacts</h2>
        <ul>
          <li key={id}>{this.formSubmitForApp.data}</li>
        </ul>
      </Container>
    );
  }
}
export default App;
