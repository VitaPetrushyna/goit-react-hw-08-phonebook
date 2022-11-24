import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { ListContacts, ContactsItem, DeleteBtn } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(filter);
  // const visibleContacts = useSelector(getVisibleContacts);
  // const contacts = useSelector(getContacts);

  const handleDeleteContact = deleteId => {
    const action = deleteContact(deleteId);
    dispatch(action);
  };

  // const filteredContacts = () => {
  //   // const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };

  // const filteredContactList = filteredContacts();

  return (
    <ListContacts>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem key={id}>
          {name + ' : ' + number}
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
