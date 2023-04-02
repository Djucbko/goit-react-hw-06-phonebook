import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/features/contact/contactSlice';
import css from './ContactForm.module.css';
import { selectContacts } from 'redux/features/contact/selectors';
const ContactForm = () => {
  const  contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const onNameChange = e => {
    setName(e.target.value);
  };
  const onNumberChange = e => {
    setNumber(e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    let checkedName = contacts.some(item => {
      return formData.name.toLowerCase() === item.name.toLowerCase();
    });
    if (!checkedName) {
      dispatch(addItem(formData));
      setName('');
      setNumber('');
    } else {
      alert('This user is already in your contacts list');
    }
  };

  return (
    <div className={css.phonebookWrapper}>
      <h2>Phonebook</h2>
      <form className={css.form} onSubmit={onFormSubmit}>
        <label>
          <span className={css.spanName}>Name</span>
          <input
            onChange={onNameChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span className={css.spanNumber}>Number</span>
          <input
            onChange={onNumberChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
