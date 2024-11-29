import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet className="max-h-screen"></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
