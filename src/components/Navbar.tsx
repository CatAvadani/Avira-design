import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=' flex flex-col gap-4 justify-center items-center bg-transparent w-full text-[#edebef] px-28 py-8'>
      <Link to='/'>
        <img src='/Logo-resized@1.5x.png' className='w-40' alt='' />
      </Link>
      <ul
        className=' flex gap-2 lg:gap-40 justify-between border-t border-white/20 py-4 font-sans
      '
      >
        <Link to='/'>Home</Link>
        <Link to='/collections'>Collections</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
    </nav>
  );
}
