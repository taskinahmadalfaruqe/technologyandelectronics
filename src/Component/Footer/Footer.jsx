import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";

const Footer = () => {
    const {user,handelSignOut}=useContext(AuthContext);
    return (
        <div className="bg-slate-200 text-black">
            <footer className="container rounded-md text-2xl mt-5 py-10 text-center font-semibold uppercase text-pink-500 font-Roboto  md:p-5 ">
                <div className="mt-7 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t-2 border-pink-500 border-blue-gray-50 py-6  lg:justify-between text-xl">
                    <p className="block  text-black leading-relaxed  antialiased">
                        &copy; 2023 Community and Cultural Events
                    </p>
                    <ul className="flex flex-col md:flex-row flex-wrap items-center gap-y-2 gap-x-8 text-black">
                        <li>
                            <Link
                                to={"/"}
                                className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/addProduct"}
                                className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                Add Product
                            </Link>
                        </li>
                        
                        
                        <li>
                            <Link
                                to={"/myCart"}
                                className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                My Cart
                            </Link>
                        </li>
                        <li>
                            {user ? (
                            <button
                                onClick={handelSignOut}
                                className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                LOGOUT
                            </button>
                        ) : (
                            <Link
                                to={"/login"}
                                className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                            >
                                Login
                            </Link>
                        )}
                        </li>
                    </ul>
                </div>

                <div className=" flex text-black flex-col md:flex-row justify-center items-center gap-5 ">
                    <h2>Find Us On </h2>
                    <div className="flex justify-center items-center gap-5 ">
                        <Link to={"https://www.facebook.com/taskinahmadalfaruqe.2/"}>
                            <div className="facebook instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                <BsFacebook></BsFacebook>
                            </div>
                        </Link>

                        <Link to={""}>
                            <div className="instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                <BsInstagram></BsInstagram>
                            </div>
                        </Link>
                        <Link to={"https://github.com/taskinahmadalfaruqe"}>
                            <div className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                <BsGithub></BsGithub>
                            </div>
                        </Link>

                        <Link to={"https://wa.me/+8801318021256"}>
                            <div className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                <BsWhatsapp></BsWhatsapp>
                            </div>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

