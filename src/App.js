import { connect } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

// import contactsOperations from './redux/contacts/contacts-operations';
// import contactsSelectors from './redux/contacts/contacts-selectors';

import { contactsOperations, contactsSelectors } from './redux/contacts';

import './App.css';

function App({ fetchContacts, isLoadingContact }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      {isLoadingContact && <h3>Завантажуємо...</h3>}
      {!isLoadingContact && (
        <div className="contacts">
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoadingContact: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
