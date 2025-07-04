import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/themeSlice';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  
  // const [isSelected, setSelected] = useState(false);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="px-4 py-2 rounded-md bg-blue-600 text-white dark:bg-yellow-400 dark:text-black transition "
    >
      
       {darkMode ? (<Sun/>) : (<Moon/>)} 
    </button>

    
  );
}
