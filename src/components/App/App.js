import { GlobalStyle } from '../GlobalStyle';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { FilterContact } from '../Filter/Filter';
import { Container } from './App.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/selectors';

import * as contactsOperation from '../../redux/contactsOperation';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isloading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        {contacts && (
          <>
            <h2>Contacts</h2>
            <FilterContact />
          </>
        )}
        {isloading && !error && <Loader />}
        {contacts && <ContactList></ContactList>}
      </Container>
      <GlobalStyle />
    </>
  );
};
