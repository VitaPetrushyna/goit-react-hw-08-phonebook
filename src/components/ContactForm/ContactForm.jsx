import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/contacts/selectors';

import { useState, useEffect } from 'react';

import { Form, AddBtn, InputData, LabelData } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    try {
      const newContact = {
        name,
        number,
      };

      if (
        contacts.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        return toast.info(
          `${newContact.name} is already in contacts.
      Please choose other name.`
        );
      }
      dispatch(addContact({ name, number }));

      toast.success('Contact added');
      reset();
    } catch (error) {
      toast.error(`${error.message}`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelData>
        Name
        <InputData
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </LabelData>
      <LabelData>
        Number
        <InputData
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </LabelData>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
}
