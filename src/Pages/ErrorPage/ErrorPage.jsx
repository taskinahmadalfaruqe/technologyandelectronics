import Navbar from "../../Component/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <div className="mb-10">
                <Navbar />
            </div>
            <div className="flex justify-center items-center p-3  ">
                <img src={`https://i.ibb.co/z6kw6Lf/404.gif`} alt="Image" className="h-[70vh]" />
            </div>
        </div>
    );
};

export default ErrorPage;