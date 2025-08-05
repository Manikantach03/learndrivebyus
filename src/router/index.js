import { useRoutes,Navigate  } from "react-router-dom";
import Sidemain from "../Sidemain";
import Loginnew from "../Loginnew";
import PrivateRoute from "./PrivateRoute";

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
