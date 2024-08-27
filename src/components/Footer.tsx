import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div className=' h-full bg-[#11041d] w-full text-white grid grid-cols-1 sm:grid-cols-5 row-span-3 sm:grid-rows-4 justify-center items-center'>
      <div className=' flex justify-start items-center gap-12 sm:gap-60 col-span-1 sm:col-span-3 row-span-1 sm:row-span-3 h-full py-8 sm:px-28  px-20 mx-auto'>
        <div>
          <h1>Title</h1>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div>
          <h1>Title</h1>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <div>
          <h1>Title</h1>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
      </div>
      <div className='col-span-1 row-span-1 sm:col-span-2 sm:row-span-3  h-full py-8 px-20 sm:px-28'>
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
      <div className=' flex flex-col sm:flex-row gap-8 justify-between items-center col-span-1 sm:col-span-5 row-span-1 border-t border-white/30 h-full py-8 px-20 sm:px-28'>
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
      </div>
    </div>
  );
}
