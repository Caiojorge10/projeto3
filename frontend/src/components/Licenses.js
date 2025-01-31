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
    <div>
      <h2>Licenças</h2>
      <button onClick={() => navigate('/register-license')}>Registrar Nova Licença</button>
      <ul>
        {licenses.map(license => (
          <li key={license.id}>
            <strong>{license.name}</strong>: {license.description} ({license.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Licenses;