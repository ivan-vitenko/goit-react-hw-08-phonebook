import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const s = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Сторінка логіна</h1>

        <form onSubmit={this.handleSubmit} style={s.form} autoComplete="off">
          <label style={s.label}>
            Пошта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={s.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Увійти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
