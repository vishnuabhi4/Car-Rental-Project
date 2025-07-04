import React from 'react'
import CarCatalogue from '../CarCatalogue'
import AuthFlow from '../../components/AuthFlow'

function Home({ user, showLogin, onLogin, onLogout, onCloseLogin }) {
  return (
    <div>

      <AuthFlow
        user={user}
        showLogin={showLogin}
        onLogin={onLogin}
        onLogout={onLogout}
        onCloseLogin={onCloseLogin}
      />

      <CarCatalogue/>
    </div>
  );
}

export default Home