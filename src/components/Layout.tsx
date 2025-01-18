import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
