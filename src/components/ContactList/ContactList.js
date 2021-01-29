import { connect } from 'react-redux';
// import contactsOperations from '../../redux/contacts/contacts-operations';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, deleteContact }) => (
  <ul>
    {contacts.map(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) && (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
            <button id={item.id} type="button" onClick={deleteContact}>
              Delete
            </button>
          </li>
        ),
    )}
  </ul>
);

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: e => dispatch(contactsOperations.deleteContact(e.target.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
