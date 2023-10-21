import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const { handelSignIn, handelGoogleSignIN } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        handelSignIn(email, password)
            .then(res => {
                if (res) {
                    navigate(location?.state ? location.state : "/");
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Sign In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `${err}`
                })
            })
    }

    const handelLoginWithGoogleProvider = () => {
        handelGoogleSignIN(googleProvider)
            .then(res => {
                if (res) {
                    navigate(location?.state ? location.state : "/");
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Sign In Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `${err}`
                })
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-full ">
                    <div>
                        <h2 className=" text-xl md:text-2xl text-center text-pink-500 lg:text-3xl font-bold uppercase">Login With Email And Password</h2>
                    </div>
                    <div className="card  w-full lg:w-2/3  shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary text-white bg-pink-500 border-pink-800">Login</button>
                            </div>

                        </form>
                    </div>
                    <div className=" mt-6  flex justify-center items-center w-full">
                        <button
                            onClick={handelLoginWithGoogleProvider}
                            className=" mx-auto btn btn-primary text-white bg-pink-500 border-pink-800">Login With Google</button>
                    </div>
                    <div className="space-y-5">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5  ">
                            <p className=" text-xl md:text-2xl text-center text-pink-500 lg:text-3xl font-bold uppercase">Do Not Have An Account !!</p>
                            <Link
                                state={location.state}
                                to={'/signup'}>
                                <button
                                    className=" mx-auto btn btn-primary text-white bg-pink-500 border-pink-800">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;