import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=' flex flex-col gap-4 justify-center items-center bg-transparent w-full text-[#edebef] px-28 py-8'>
      <img src='/public/Logo-light.png' alt='' />
      <ul className=' flex gap-2 lg:gap-40 justify-between border-t border-white/20 py-4'>
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
    </nav>
  );
}
