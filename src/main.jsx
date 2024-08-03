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

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateAccount></CreateAccount>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   </React.StrictMode>,
)
