import { Outlet } from "react-router-dom";

import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";

const Root = () => {
  return (
    <div className="font-poppins max-w-6xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
