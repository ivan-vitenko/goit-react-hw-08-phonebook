import { connect } from 'react-redux';
import { useEffect, Component, Suspense, lazy } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from './redux/auth';
import { contactsOperations, contactsSelectors } from './redux/contacts';

import './App.css';

// import HomeView from './views/HomeView';
const HomeView = lazy(() => import('./views/HomeView'));

// import ContactsView from './views/ContactsView';
const ContactsView = lazy(() => import('./views/ContactsView'));

// import RegisterView from './views/RegisterView';
const RegisterView = lazy(() => import('./views/RegisterView'));

// import LoginView from './views/LoginView';
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <AppBar />

          <Suspense fallback={<p>Завантажуємо...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PrivateRoute exact path="/contacts" component={ContactsView} />

              <PublicRoute
                exact
                path="/register"
                restricted
                component={RegisterView}
                redirectTo="/contacts"
              />

              <PublicRoute
                exact
                path="/login"
                restricted
                component={LoginView}
                redirectTo="/contacts"
              />
            </Switch>
          </Suspense>
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
