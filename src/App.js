import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; // Vamos criar esta
import PetPage from './pages/PetPage';   // E esta
import './App.css';

function App() {
  // 1. Criamos um estado simples para saber se o usuário está logado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 2. Esta função será chamada pelo LoginPage quando o login for um sucesso
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace /> // Se já está logado, vai para o Home
            ) : (
              <LoginPage onLoginSuccess={handleLoginSuccess} /> // Passa a função de callback
            )
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <HomePage /> // Página principal (Menu)
            ) : (
              <Navigate to="/login" replace /> // Se não está logado, volta para Login
            )
          }
        />
        <Route
          path="/pets"
          element={
            isAuthenticated ? (
              <PetPage /> // Página de listagem de Pets
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        {/* Adicione outras rotas (Tutores, Clínicas, etc.) aqui no futuro */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;