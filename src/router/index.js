import { useRoutes } from "react-router-dom";
import Login from "../Login-And-Reg/Login/Login";
import RegistrationForm from "../Login-And-Reg/Reg/RegistrationForm";
import SchoolDrivingHome from "../Components/Home";
import Dashboard from "../Dashboard";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <SchoolDrivingHome />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <RegistrationForm />,
    },
    
      {
      path: "/dashboard",
      element: <Dashboard />
      }

  ];

  return useRoutes(routes);
};

export default AppRoutes;
