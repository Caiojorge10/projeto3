import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Obtém o nome do usuário

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username'); // Remove o nome do usuário
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        {username ? (
          <>
            <li style={styles.li}>
              <span style={styles.username}>Olá, {username}</span>
            </li>
            <li style={styles.li}>
              <button onClick={handleLogout} style={styles.button}>Sair</button>
            </li>
          </>
        ) : (
          <li style={styles.li}>
            <Link to="/login" style={styles.link}>Login</Link>
          </li>
        )}
        <li style={styles.li}>
          <Link to="/register-license" style={styles.link}>Registrar Licença</Link>
        </li>
        <li style={styles.li}>
          <Link to="/licenses" style={styles.link}>Licenças</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  li: {
    margin: '0 15px',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  username: {
    color: '#fff',
    fontSize: '18px',
    marginRight: '10px',
  },
  button: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default Navbar;