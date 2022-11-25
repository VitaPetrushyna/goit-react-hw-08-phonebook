import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { ListContacts, ContactsItem, DeleteBtn } from './ContactList.styled';

export function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = deleteId => {
    const action = deleteContact(deleteId);
    dispatch(action);
  };

  return (
    <ListContacts>
      {visibleContacts.map(({ name, number, id }) => (
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
