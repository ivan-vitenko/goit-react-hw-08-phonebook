// import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.contacts;

// const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
// };

export default { getLoading, getFilter, getContacts };
