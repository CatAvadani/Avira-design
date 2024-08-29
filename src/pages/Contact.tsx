import { Field, Label, Switch } from '@headlessui/react';
import { useState } from 'react';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className='bg-white/20 pb-24 sm:py-4 sm:pb-44 m-2 p-4 sm:m-20 mb-44 sm:my-44'>
      <h2 className='text-3xl text-white text-center sm:mt-10'>Get in touch</h2>
      <form action='#' method='POST' className='mx-auto mt-4 max-w-xl sm:mt-10'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <div className='mt-2.5'>
              <input
                type='text'
                placeholder='First name'
                className='block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <div className='mt-2.5'>
              <input
                placeholder='Last name'
                type='text'
                className='block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <input
                type='email'
                placeholder='Email'
                className='block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <div className=' mt-2.5'>
              <input
                type='tel'
                placeholder='Phone number'
                className='block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <textarea
                placeholder='Message'
                rows={4}
                className='block w-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                defaultValue={''}
              />
            </div>
          </div>
          <Field className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className='group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600'
              >
                <span className='sr-only'>Agree to policies</span>
                <span
                  aria-hidden='true'
                  className='h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5'
                />
              </Switch>
            </div>
            <Label className='text-sm leading-6 text-white/70'>
              By selecting this, you agree to our{' '}
              <a href='#' className='font-semibold text-white'>
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full  bg-[#ff8500] px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm  hover:bg-[#ff8500]/80 transition-colors duration-200 '
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
