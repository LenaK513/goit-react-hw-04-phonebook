import React, { Component } from 'react';

import { FormStyle, Input, Button } from './Form.styled';
class Form extends Component {
  state = {
    name: '',
  };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitForApp(this.state.name);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '' });
  };
  render() {
    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <label> Name</label>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInput}
        />

        <Button type="submit">Add contact </Button>
      </FormStyle>
    );
  }
}

export default Form;
