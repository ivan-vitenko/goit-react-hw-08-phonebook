import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth/';

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

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Сторінка реєстрації</h1>

        <form onSubmit={this.handleSubmit} style={s.form} autoComplete="off">
          <label style={s.label}>
            І'мя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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

          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
