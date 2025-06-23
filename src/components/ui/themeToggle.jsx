import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/themeSlice';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-yellow-400 dark:text-black transition"
    >
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}
