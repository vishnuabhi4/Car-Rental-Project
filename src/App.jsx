import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import ProtectedRoute from "./Healpers/ProtectedRoute";
import Layout from "./components/LayoutArrangments";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./components/Dashboard/LoginDashboard";
import { applyDarkMode } from "./Healpers/theme";
import { handleLogin, handleLogout, showLoginModal, closeLoginModal } from "./Healpers/auth";
import CarBookingPage from "./pages/CarBookingPage";
import CarCatalogue from "./pages/CarCatalogue";
import Cart from "./components/Cart";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function App() {
   //Dark mode
  const darkMode = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);

   //Auth state
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const login = (userData) => handleLogin(setUser, setShowLogin, userData);
  const logout = () => handleLogout(setUser);
  const openLogin = () => showLoginModal(setShowLogin);
  const closeLogin = () => closeLoginModal(setShowLogin);

   // Router setup
  const router = createBrowserRouter([
    {
      path: "/",
       errorElement: <ErrorPage />,
      element: (
        <Layout
          onLoginClick={openLogin}
          onSignupClick={openLogin} // assuming login/signup share modal
          onLogout={logout}
        />
      ),
      children: [
        {
          index: true,
          element: (
            <Home
              showLogin={showLogin}
              onLogin={login}
              onLogout={logout}
              onCloseLogin={closeLogin}
            />
          ),
        },
        {
          path:"home",
          element:<Layout />
        },
        {
          path: "errorpage",
          element: <ErrorPage />,
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
          {
        path: "cars",           
        element: <CarCatalogue />,
      },
        {
    path: "/cars/:id",
    element: <CarBookingPage />,
  },{
    path:"/cart",
    element:(
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    )
  },{
    path:'/about',
    element:<AboutUs />
  }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
