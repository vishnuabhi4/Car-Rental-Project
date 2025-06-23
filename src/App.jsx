import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import './App.css'

function App() {
 
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  return (
    <>
     <div className="app-container transition duration-300"> {/* This is your main container */}
      <Header />
      <main >

      </main>
      <Footer />
      </div>
   
    </>
  )
}

export default App
