import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import SendParcel from "../pages/sendParcel/SendParcel";
import PrivateRoute from "../private/PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";
import Successful from "../pages/Dashboard/Successful";
import Cancelled from "../pages/Dashboard/Cancelled";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import RiderSignup from "../pages/Rider/RiderSignup";



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
      }, {
        path: 'rider',
        loader:()=>fetch('/warehouses.json'),
        Component: RiderSignup
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
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: 'myParcels',
        element: <MyParcels></MyParcels>
      }, {
        path: 'payment-success',
        Component: Successful
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'payment-cancelled',
        Component: Cancelled

      },
      {
        path: 'paymentHistory',
        Component: PaymentHistory
      }
    ]
  }
]);

export default router;
