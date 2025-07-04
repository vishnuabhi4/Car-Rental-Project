// components/LayoutArrangments.jsx
import { Outlet } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";

export default function Layout({ onLoginClick, onSignupClick }) {
  return (
    <div className="app-container flex flex-col min-h-screen transition duration-300">
      <Header
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />

      <main className="flex-grow">
        <div className="App dark:bg-gray-800 dark:text-white">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
