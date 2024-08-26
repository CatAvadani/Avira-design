import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import About from './pages/About.tsx';
import Collections from './pages/Collections.tsx';
import Contact from './pages/Contact.tsx';
import Home from './pages/Home.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index Component={Home} />
      <Route path='collections' Component={Collections} />
      <Route path='about' Component={About} />
      <Route path='contact' Component={Contact} />
      <Route path='*' Component={() => <div>Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
