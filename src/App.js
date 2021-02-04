import { connect } from 'react-redux';
import { useEffect, Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

import { authOperations } from './redux/auth';
import { contactsOperations, contactsSelectors } from './redux/contacts';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <AppBar />

          <Switch>
            <Route exact path="/" component={ContactsView} />
            <Route exact path="/contacts" component={ContactsView} />
            <Route exact path="/register" component={RegisterView} />
            <Route exact path="/login" component={LoginView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function App1({ fetchContacts, isLoadingContact }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <AppBar />

        <Switch>
          <Route exact path="/" component={ContactsView} />
          <Route exact path="/contacts" component={ContactsView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  isLoadingContact: contactsSelectors.getLoading(state),
});

// const mapDispatchToProps = dispatch => ({
// fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
