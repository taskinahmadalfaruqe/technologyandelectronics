import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"
import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";

const Navbar = () => {
    const { user, handelSignOut, isDark, setIsDark } = useContext(AuthContext);

    const handelDarkmood = () => {
        setIsDark(!isDark)
    }
    const NavBar = (
        <div
            className="flex flex-col gap-2 lg:flex-row justify-start lg:justify-center lg:items-center">
            <NavLink
                to={"/"}
                className={(
                    { isActive }) => isActive
                        ? "bg-pink-500 font-semibold text-md uppercase text-white p-1 px-3 rounded-md"
                        : " hover:bg-pink-300 font-semibold text-md uppercase text-black p-1 px-3 rounded" +
                        "-md"
                }>
                Home
            </NavLink>
            <NavLink
                to={"/myCart"}
                className={(
                    { isActive }) => isActive
                        ? "bg-pink-500 font-semibold text-md uppercase text-white p-1 px-3 rounded-md"
                        : " hover:bg-pink-300 font-semibold text-md uppercase text-black p-1 px-3 rounded" +
                        "-md"
                }>
                My Cart
            </NavLink>

            <NavLink
                to={"/addProduct"}
                className={(
                    { isActive }) => isActive
                        ? "bg-pink-500 font-semibold text-md uppercase text-white p-1 px-3 rounded-md"
                        : " hover:bg-pink-300 font-semibold text-md uppercase text-black p-1 px-3 rounded" +
                        "-md"
                }>
                Add Product
            </NavLink>

            {
                user
                    ? <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
                        <div
                            className="h-12 w-12 rounded-full bg-pink-300 flex justify-center items-center overflow-hidden">
                            {
                                user
                                    ?.photoURL
                                    ? <img src={user.photoURL} alt="UserPhoto" />
                                    : <img
                                        className="h-12 w-12 flex justify-center items-center overflow-hidden"
                                        src={`https://i.ibb.co/2nC8FF4/user.webp`}
                                        alt="UserPhoto" />
                            }
                        </div>
                        <div>
                            {
                                user
                                    ?.displayName
                                    ? <p>{user.displayName}</p>
                                    : <p>{user.email}</p>
                            }
                        </div>
                        <button
                            onClick={handelSignOut}
                            className="text-black font-semibold uppercase p-1 px-3 hover:bg-pink-300 rounded-md hover:text-white transition-all duration-200">
                            Logout
                        </button>
                    </div>
                    : <NavLink
                        to={"/login"}
                        className={(
                            { isActive }) => isActive
                                ? "bg-pink-500 font-semibold text-md uppercase text-white p-1 px-3 rounded-md"
                                : " hover:bg-pink-300 font-semibold text-md uppercase text-black p-1 px-3 rounded" +
                                "-md"
                        }>
                        Login
                    </NavLink>
            }
        </div>
    );
    return (
        <div
            style={{
                background: 'rgba(255,255,255,0.7)'
            }}>
            <div className="container  flex justify-between items-center py-2">
                <div >
                    <Link
                        to={"/"}
                        className="  logo flex justify-center items-center  text-2xl font-bold text-white w-12 h-12 rounded-full bg-[#ff00ff] overflow-hidden">
                        <img src={'https://i.ibb.co/TtDvDhf/logo.png'} alt="" />
                    </Link>
                </div>

                <div
                    className=" font-3xl text-white rounded-full h-12 w-12  bg-pink-500 flex justify-center items-center overflow-hidden">
                    {
                        isDark
                            ? <button onClick={handelDarkmood}>
                                <CiLight className="text-3xl font-semibold"></CiLight>
                            </button>
                            : <button onClick={handelDarkmood} className="text-3xl font-semibold"><MdDarkMode /></button>
                    }
                </div>

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-2xl bg-pink-200">
                        <FaBars></FaBars>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content rounded-md  z-[10000] p-3 shadow bg-slate-100  absolute top-14 w-[50vw] text-center right-0">
                        {NavBar}
                    </ul>
                </div>


                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{NavBar}</ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
