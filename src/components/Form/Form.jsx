import React, { Component } from 'react';

import { FormStyle, Input, Button } from './Form.styled';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForApp(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <label htmlFor="1"> Name</label>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInput}
          id="1"
        />
        <label htmlFor="2"> Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInput}
          id="2"
        />
        <Button type="submit">Add contact </Button>
      </FormStyle>
    );
  }
}

export default Form;
