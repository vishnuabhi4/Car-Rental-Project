// components/AuthFlow.jsx
import LoginForm from './forms/LoginForms';
import Dashboard from './Dashboard/Dashboard';

export default function AuthFlow({ user, showLogin, onLogin, onLogout, onCloseLogin }) {
  if (user) {
    return <Dashboard user={user} onLogout={onLogout} />;
  }

  if (showLogin) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
          <button 
            onClick={onCloseLogin}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
          <LoginForm onLogin={onLogin} />
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      <p>Please login to access your dashboard</p>
    </main>
  );
}