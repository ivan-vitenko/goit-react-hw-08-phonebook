import { connect } from 'react-redux';

// import { changeFilter } from '../../redux/contacts/contacts-actions';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact by name
    <input
      className={s.Filter}
      name="filter"
      type="text"
      placeholder="Enter to find"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
