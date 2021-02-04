import React from 'react';
import { NavLink } from 'react-router-dom';
// import s from './Navigation.module.css';

const s = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={s.link} activeStyle={s.activeLink}>
      Головна
    </NavLink>

    <NavLink to="/contacts" exact style={s.link} activeStyle={s.activeLink}>
      Контакти
    </NavLink>
  </nav>
);

export default Navigation;
