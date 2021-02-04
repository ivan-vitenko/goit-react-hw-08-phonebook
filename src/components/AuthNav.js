import React from 'react';
import { NavLink } from 'react-router-dom';
// import s from './AuthNav.module.css';

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

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact style={s.link} activeStyle={s.activeLink}>
      Реєстрація
    </NavLink>

    <NavLink to="/login" exact style={s.link} activeStyle={s.activeLink}>
      Логін
    </NavLink>
  </div>
);

export default AuthNav;
