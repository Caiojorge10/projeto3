import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Bem-vindo ao Sistema de Licenças</h1>
      <p>Use a navbar acima para navegar entre as páginas.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
};

export default Home;