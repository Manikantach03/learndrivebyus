import { useRoutes } from "react-router-dom";
import Login from "../Login-And-Reg/Login/Login";
import RegistrationForm from "../Login-And-Reg/Reg/RegistrationForm";
import SchoolDrivingHome from "../Components/Home";

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
  ];

  return useRoutes(routes);
};

export default AppRoutes;
