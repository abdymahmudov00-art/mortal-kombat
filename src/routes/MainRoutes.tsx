import { Route, Routes } from "react-router-dom";
import Faq from "../components/pages/home/FAQ/Faq";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/faq", element: <Faq/> },
  ];

  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
