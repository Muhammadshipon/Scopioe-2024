import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ResetPassword from './pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount></CreateAccount>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
   path:"/home",
   element:<HomePage></HomePage>
  },
  {
    path:"/reset-password",
    element:<ResetPassword></ResetPassword>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   </React.StrictMode>,
)
