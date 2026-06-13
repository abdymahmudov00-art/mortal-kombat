import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/", element: "" },
    { link: "/", element: "" },
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
