import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import routesConfig from "../configs/routesConfig";

const Layout = () => {
  const navigate = useNavigate();
  const link = new URL(window.location.href);

  useEffect(() => {
    const route = routesConfig.find((route) =>
      link.pathname.includes(
        route.routes.map((route) => route.path.split("/")[0])[0]
      )
    );
    if (!route) navigate("/home");
  }, [link]);

  return (
    <>
      {routesConfig.map((config, i) => {
        return (
          <div key={i}>
            {config.routes.map((route) => (
              <div key={i}>
                {config.settings.layout.config.navbar &&
                  link.pathname.includes(route.path.split("/")[0]) && (
                    <Navbar />
                  )}
                <div
                  className={
                    config.settings.layout.config.sidebar &&
                    link.pathname.includes(route.path.split("/")[0]) && (
                      <Sidebar />
                    )
                      ? "grid grid-cols-5"
                      : ""
                  }
                >
                  {config.settings.layout.config.sidebar &&
                    link.pathname.includes(route.path.split("/")[0]) && (
                      <Sidebar />
                    )}
                  <div
                    className={
                      config.settings.layout.config.sidebar &&
                      link.pathname.includes(route.path.split("/")[0]) && (
                        <Sidebar />
                      )
                        ? "col-span-4"
                        : ""
                    }
                  >
                    <Routes>
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                      />
                    </Routes>
                  </div>
                </div>
                {config.settings.layout.config.footer &&
                  link.pathname.includes(route.path.split("/")[0]) && (
                    <Footer />
                  )}
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Layout;
