import { Outlet } from "react-router-dom";

import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-poppins max-w-6xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
