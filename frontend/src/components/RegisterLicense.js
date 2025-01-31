import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Licenses = () => {
  const [licenses, setLicenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/licenses/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        setLicenses(response.data);
      } catch (error) {
        console.error('Erro ao buscar licenças:', error);
      }
    };
    fetchLicenses();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Licenças</h2>
      <button onClick={() => navigate('/register-license')} style={styles.button}>
        Registrar Nova Licença
      </button>
      <ul style={styles.list}>
        {licenses.map(license => (
          <li key={license.id} style={styles.listItem}>
            <strong>{license.name}</strong>: {license.description} ({license.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
};

export default Licenses;