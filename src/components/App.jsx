import React, { Component } from 'react';
import Form from './Form/Form';
class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitForApp = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmitForApp={this.formSubmitForApp} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
export default App;
