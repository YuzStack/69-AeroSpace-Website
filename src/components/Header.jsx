import { Link } from 'react-router';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='bg-bg/70 border-border/40 sticky top-0 z-50 flex items-center justify-between border-b px-8 py-4 backdrop-blur-md transition-colors duration-300'>
      <Link to='/' className='text-main text-xl font-bold tracking-widest'>
        AERO<span className='text-accent'>SPACE</span>
      </Link>

      <nav className='flex items-center gap-8'>
        <Link
          to='/fleet'
          className='hover:text-accent text-sm font-medium transition-colors'
        >
          The Fleet
        </Link>
        <Link
          to='/engineering'
          className='hover:text-accent text-sm font-medium transition-colors'
        >
          Architecture
        </Link>
        <Link
          to='/reserve'
          className='bg-text-main text-bg rounded-full px-4 py-2 text-sm font-medium transition-all hover:opacity-90'
        >
          Book Berth
        </Link>

        <button
          onClick={toggleTheme}
          className='border-border hover:bg-surface cursor-pointer rounded-full border p-2 transition-colors'
          aria-label='Toggle Layout Theme'
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}
