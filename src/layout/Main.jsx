import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";


const Main = () => {
  return (
    <div>
     <Navbar></Navbar>
     <div className="max-w-6xl mx-auto">
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  );
};

export default Main;