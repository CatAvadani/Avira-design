import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <body className='bg-[#301951] flex flex-col justify-center items-center min-h-screen'>
        <Navbar />
        <main className='flex-1 w-full'>
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
