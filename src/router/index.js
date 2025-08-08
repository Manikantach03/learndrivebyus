import { useRoutes,Navigate  } from "react-router-dom";
import Sidemain from "../Sidemain";
import Loginnew from "../Loginnew";
import PrivateRoute from "./PrivateRoute";
import Register from "../Register"
import ForgotPassword from "../Forgotpassword";
const AppRoutes = () => {
  const routes = [
       {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/login",
      element: <Loginnew />,
    },
      {
      path: "/register",
      element: <Register/>,
    },
        {
      path: "/forgotpassword",
      element: <ForgotPassword/>,
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Sidemain />
        </PrivateRoute>
      ),
    },
  ];

  return useRoutes(routes);
};
export default AppRoutes;
