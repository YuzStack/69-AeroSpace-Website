import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/index.css';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import Engineering from './pages/Engineering';
import Reserve from './pages/Reserve';
import ThemeProvider from './context/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/fleet', element: <Fleet /> },
      { path: '/engineering', element: <Engineering /> },
      { path: '/reserve', element: <Reserve /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
