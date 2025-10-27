import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import './Login.css';
import backgroundImage from '../assets/doguinhos.png'; 

const LoginPage = () => {
  const [error, setError] = useState('');
  const handleLogin = async (username, password) => {
    setError('');

    try {
      if (username === 'diretoria' && password === 'senha123') {
        console.log('Login bem-sucedido! Redirecionando para a home...');
      } else {
        throw new Error('Usuário ou senha incorretos!');
      }
      //

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div
        className="login-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="login-container">
        <LoginForm onSubmit={handleLogin} error={error} />
      </div>
    </div>
  );
};

export default LoginPage;