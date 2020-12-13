import React, { Component } from 'react';
import PT from 'prop-types';
import shortid from 'shortid';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form id="contact" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            className="input-field"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            placeholder="Andrey Kovsh"
          />
        </label>
        <br />
        <label htmlFor={this.numberInputId}>
          Phone number
          <input
            className="input-field"
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            placeholder="817-18-41"
          />
        </label>

        <button type="submit" className="submit-button">
          Add contact
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: PT.func.isRequired,
};

export default Form;