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
      className='w-full bg-transparent text-[#edebef] px-4 lg:px-28 py-4'
    >
      <div className='flex justify-between items-center mb-4 lg:hidden'>
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
        <div className='border-b border-white/20 w-full mb-4'></div>
        <div className='flex gap-16'>
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
      {isOpen && (
        <div className='lg:hidden flex flex-col items-center mt-4 text-xl space-y-8'>
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
      )}
    </nav>
  );
}
