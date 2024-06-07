import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Inscription from './Inscription';

const AuthPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(true);
  };

  const handleShowLogin = () => {
    setShowSignUp(false);
  };

  return (
    <div>
      {showSignUp ? (
        <Inscription onShowLogin={handleShowLogin} />
      ) : (
        <LoginForm onShowSignUp={handleShowSignUp} />
      )}
    </div>
  );
};

export default AuthPage;
