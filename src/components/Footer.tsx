import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaArrowUpLong, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { footerLinks } from '../data/FooterLinks';
import '../index.css';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <div
      id='footer'
      className=' h-full bg-[#11041d] w-full text-white grid grid-cols-1 sm:grid-cols-5 row-span-3 sm:grid-rows-4'
    >
      <div className=' flex justify-between w-full items-center col-span-1 sm:col-span-3 row-span-1 sm:row-span-3 h-full px-4 py-8 lg:pl-28 mx-auto'>
        {footerLinks.map((link) => (
          <FooterLinks title={link.title} links={link.links} />
        ))}
      </div>
      <div className='col-span-1 row-span-1 sm:col-span-2 sm:row-span-3  h-full py-8 px-4 lg:px-28'>
        <h1 className=' text-xl mb-6'>Subscribe</h1>
        <p>Subscribe to our newsletter to receive exclusive offers</p>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full h-10 bg-white/30 text-white/70 px-4 mt-4'
        />
        <button className='w-full h-10 bg-[#ff8500] text- mt-4'>
          Subscribe
        </button>
      </div>
      <div className=' flex flex-col sm:flex-row gap-8 justify-center items-center col-span-1 sm:col-span-5 row-span-1 h-full py-8 px-4 lg:px-28'>
        <p className='text-center text-white/30'>
          &copy; {new Date().getFullYear()} Avira. All Rights Reserved
        </p>
        <ul className='flex justify-center items-center gap-4'>
          <li className=' hover:text-white/60 transition-all'>
            <FaFacebookF />
          </li>
          <li className=' hover:text-white/60 transition-all'>
            <FaXTwitter />
          </li>
          <li className=' hover:text-white/60 transition-all'>
            <FaLinkedinIn />
          </li>
          <li className=' hover:text-white/60 transition-all'>
            <BsInstagram />
          </li>
        </ul>
        <Link
          to='navigation'
          smooth={true}
          duration={500}
          offset={-70}
          className=' cursor-pointer'
        >
          <div className=' flex justify-center items-center gap-2'>
            <p className=' text-white/80 hover:text-gray-200 transition-all'>
              Back
            </p>
            <FaArrowUpLong className=' size-4 text-[#ff6500] hover:scale-y-150 transition-all' />
          </div>
        </Link>
      </div>
    </div>
  );
}
