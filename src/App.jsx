import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import './App.css'
import CarSlider from './components/ui/Slider';
import CarRentalDisplay from './components/ui/CarRentalDisplay';
import { Car } from 'lucide-react';
import CarRentalCard from './components/Cards/CarRentalCard';
import AuthFlow from './components/AuthFlow';


function App() {
//  darkMode initial
  const darkMode = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);
//  darkMode end
//Login start
   const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
     <div className="app-container transition duration-300">
       <Header 
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
        onLogout={handleLogout}
      />
      <main >
        <div className="App">
      
      
      <AuthFlow
        user={user}
        showLogin={showLogin}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onCloseLogin={handleCloseLogin}
      />
    </div>
    <CarSlider />
    <CarRentalDisplay />
      </main>
      <Footer />
      </div>
   
    </>
  )
}

export default App
