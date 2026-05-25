import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X, Moon, Sun } from 'lucide-react';
// eslint-disable-next-line
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The Fleet', path: '/fleet' },
    { name: 'Architecture', path: '/engineering' },
  ];

  return (
    <header className='bg-bg/70 border-border/40 sticky top-0 z-50 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md transition-colors duration-300 md:px-8'>
      <Link
        to='/'
        className='text-main text-xl font-bold tracking-widest'
        onClick={() => setIsOpen(false)}
      >
        AERO<span className='text-accent'>SPACE</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className='hidden items-center gap-8 md:flex'>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className='hover:text-accent text-sm font-medium transition-colors'
          >
            {link.name}
          </Link>
        ))}
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
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>

      {/* Mobile Toggle Buttons */}
      <div className='flex items-center gap-4 md:hidden'>
        <button
          onClick={toggleTheme}
          className='border-border rounded-full border p-2 transition-colors'
          aria-label='Toggle Theme'
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-main focus:outline-none'
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className='border-border/40 absolute top-full left-0 z-40 flex w-full flex-col gap-6 border-b bg-black/60 px-8 py-8 shadow-2xl backdrop-blur-xl md:hidden'
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className='hover:text-accent text-lg font-medium tracking-wide text-white transition-colors'
              >
                {link.name}
              </Link>
            ))}
            <Link
              to='/reserve'
              onClick={() => setIsOpen(false)}
              className='bg-accent text-bg rounded-full py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:opacity-90'
            >
              Book Berth
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
