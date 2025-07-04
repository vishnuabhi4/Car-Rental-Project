import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';
import LoginForm from './forms/LoginForms';
import Dashboard from './Dashboard/LoginDashboard';
import { useNavigate } from 'react-router-dom';


export default function AuthFlow({ showLogin, onCloseLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = (userData) => {
  dispatch(login(userData));  //  stores user in Redux
  onCloseLogin();             //  closes modal
  navigate('/');     //  navigates to dashboard
};

  const handleLogout = () => {
    dispatch(logout());                 // clears user from Redux
  };

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  if (showLogin) {
    return (
      <div className="fixed inset-0 dark:bg-gray-800 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
          <button
            onClick={onCloseLogin}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 dark:bg-gray-800  dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p>Please login to access your dashboard</p>
    </main>
  );
}
