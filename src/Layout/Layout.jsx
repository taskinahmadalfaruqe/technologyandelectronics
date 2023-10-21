import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/ContextProvider";

const Layout = () => {
    const{isDark}=useContext(AuthContext)
    return (
        <div className={isDark? "bg-black text-white":"bg-white text-black"}>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;