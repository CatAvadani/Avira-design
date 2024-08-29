import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id='navigation'
      className='w-full sm:fixed z-10 top-5 sm:left-[50%] sm:translate-x-[-50%] px-4 lg:px-28 py-4 backdrop-blur-lg bg-[#301951]/80 text-[#edebef] sm:rounded-full max-w-5xl mx-auto'
    >
      <div className='flex justify-between items-center mb-2 lg:hidden'>
        <Link to='/'>
          <img src='/Logo-resized@1.5x.png' className='w-32' alt='Logo' />
        </Link>
        <button className='text-white focus:outline-none' onClick={toggleMenu}>
          {isOpen ? (
            <XMarkIcon className='w-8 h-8' />
          ) : (
            <Bars3BottomRightIcon className='w-8 h-8' />
          )}
        </button>
      </div>

      <div className='hidden lg:flex lg:flex-col lg:items-center'>
        <Link to='/'>
          <img src='/Logo-resized@1.5x.png' className='w-40 mb-4' alt='Logo' />
        </Link>
        <div className='border-b border-white/20 w-full mb-2'></div>
        <div className='flex gap-16 '>
          <Link to='/' className='hover:text-white/65 transition-all'>
            Home
          </Link>
          <Link
            to='/collections'
            className='hover:text-white/65 transition-all'
          >
            Collections
          </Link>
          <Link to='/about' className='hover:text-white/65 transition-all'>
            About
          </Link>
          <Link to='/contact' className='hover:text-white/65 transition-all'>
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center mt-4 text-xl space-y-8 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Link
          to='/'
          className='py-2 hover:text-white/65 transition-all'
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to='/collections'
          className='py-2 hover:text-white/65 transition-all'
          onClick={toggleMenu}
        >
          Collections
        </Link>
        <Link
          to='/about'
          className='py-2 hover:text-white/65 transition-all'
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to='/contact'
          className='py-2 hover:text-white/65 transition-all'
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
