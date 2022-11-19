import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { ListContacts, ContactsItem, DeleteBtn } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = deleteId => {
    const action = deleteContact(deleteId);
    dispatch(action);
  };

  const filtredContacts = () => {
    // const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ListContacts>
      {filteredContactList.map(({ name, phone, id }) => (
        <ContactsItem key={id}>
          {name + ' : ' + phone}
          {
            <DeleteBtn
              type="button"
              name="delete"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </DeleteBtn>
          }
        </ContactsItem>
      ))}
    </ListContacts>
  );
}
