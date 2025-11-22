import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import SendParcel from "../pages/sendParcel/SendParcel";
import PrivateRoute from "../private/PrivateRoute";



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
      },
      {
        path: 'sendParcel',
        loader: () => fetch('/serviceCenter.json'),
        element: <PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute >
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
