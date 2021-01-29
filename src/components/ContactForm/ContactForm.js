import { useState } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import s from './ContactForm.module.css';

function ContactForm({ contacts, addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const inputName = e.target.name;

    switch (inputName) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const isDuplicate = () => {
    let isDublicate = false;

    contacts.map(item => {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        alert(`${item.name} is already in contacts.`);
        isDublicate = true;
      }
    });

    return isDublicate;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name && number && !isDuplicate()) {
      addContact(name, number);
      resetState();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone number
        <input
          name="number"
          type="number"
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
