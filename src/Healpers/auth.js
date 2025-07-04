export function handleLogin(setUser, setShowLogin, userData) {
  setUser(userData);
  setShowLogin(false);
}

export function handleLogout(setUser) {
  setUser(null);
}

export function showLoginModal(setShowLogin) {
  setShowLogin(true);
}

export function closeLoginModal(setShowLogin) {
  setShowLogin(false);
}
