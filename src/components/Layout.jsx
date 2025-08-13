import Navbar from "./Navbar/Navbar";
import { PageHeader, Footer } from "../containers";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  const showPageHeader = pathname !== "/" && !pathname.startsWith("/blogs/");

  return (
    <div className="app">
      <Navbar />
      {showPageHeader && <PageHeader />}
      <main role="main" className="mb-[8rem]" aria-label="Main Content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;