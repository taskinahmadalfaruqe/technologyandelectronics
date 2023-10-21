import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/ContextProvider";
import Navbar from "../../Component/Navbar/Navbar";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUserWithEmail, handelManageUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const userName = form.get("name");
        const photoURL = form.get("photo");
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            createUserWithEmail(email, password)
                .then(res => {
                        handelManageUser(userName,photoURL)
                        navigate(location.state ? location.state : "/");
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "SuccessFully Login",
                            showConfirmButton: true,
                            timer: 2000,
                        });
                    console.log(res)
                })
        } else {
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: "Your Password Must Be 6-16 characters, 1 Number, 1 Special Character, 1 lowercase, 1 uppercase",
                showConfirmButton: true,
                timer: 5000,
            });
        }

    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col w-full">
                    <div>
                        <h2 className="text-xl md:text-2xl text-center text-pink-500 lg:text-3xl font-bold uppercase">
                            Register An Account
                        </h2>
                    </div>
                    <div className="card w-full lg:w-2/3 shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body w-full">
                            <div className="form-control">
                                <label className="label" htmlFor="name">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered"
                                    required="required"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="email">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered"
                                    required="required"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="photo">
                                    <span className="label-text">Picture URl</span>
                                </label>
                                <input
                                    id="photo"
                                    name="photo"
                                    type="text"
                                    placeholder="Enter Your Picture URL"
                                    className="input input-bordered"
                                    required="required"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="password">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="input input-bordered"
                                    required="required"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white bg-pink-500 border-pink-800"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="space-y-5">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                            <p className="text-xl md:text-2xl text-center text-pink-500 lg:text-3xl font-bold uppercase">
                                Do You Have An Account?
                            </p>
                            <Link to="/login">
                                <button className="mx-auto btn btn-primary text-white bg-pink-500 border-pink-800">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;