import React from 'react';

const s = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={s.container}>
    <h1 style={s.title}>Вітаємо на сторінці Телефонної книги :)</h1>
  </div>
);

export default HomeView;
