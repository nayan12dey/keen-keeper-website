import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import Timeline from './pages/timeline/Timeline.jsx';
import { router } from './routes/Routes.jsx';
import FriendProvider from './context/FriendProvider.jsx';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>

    <ToastContainer />

  </StrictMode>,
)
