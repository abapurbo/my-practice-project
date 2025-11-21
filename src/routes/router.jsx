import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'coverage',
        loader: () => fetch('/serviceCenter.json'),
        element: <Coverage />
      }
    ]
  },
  {
    path: '/authLayout',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signUp',
        element: <SignUp />
      }
    ]
  }
]);

export default router;
