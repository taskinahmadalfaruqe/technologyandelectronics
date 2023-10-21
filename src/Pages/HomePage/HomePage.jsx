import { useContext, useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import LodeSingleProduct from "../../Component/LodeSingleProduct/LodeSingleProduct";
import ContactUS from "../../Component/ContactUS/ContactUS";
import { AuthContext } from "../../Provider/ContextProvider";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
// import { Link } from "react-router-dom";
import "./teamCard.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
    const { isLoading } = useContext(AuthContext);
    const loderData = useLoaderData('');
    const [brand, setBrand] = useState([]);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setProductData(loderData)
    }, [loderData])

    useEffect(() => {
        fetch('/BrandName.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, []);
    useEffect(() => {
        Aos.init();
    }, []);

    if (isLoading) {
        return (<div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>)
    }

    return (
        <div>
            <Banner />
            <div className=" p-0 md:container">
                <h2 className="text-3xl font-semibold text-center uppercase font-Rancho mt-10 text-pink-500"> You Can Find Your Product By Brand</h2>
                <div className="flex gap-2 justify-center items-center flex-wrap my-5 container">

                    {
                        brand?.map(singleBrand => (
                            <button key={singleBrand.id}>
                                <Link
                                    to={`/lodeDataByCatagory/${singleBrand.brand_name}`}
                                    className="flex gap-2 justify-center items-center  p-1 px-2 md:px-5 md:p-2 rounded-md border border-pink-500 text-white hover:text-pink-500 uppercase font-semibold hover:bg-white bg-pink-500 transition-all duration-300">
                                    <h1>{singleBrand.brand_name}</h1>
                                    <img src={singleBrand.brand_image} alt={singleBrand.brand_name} className="h-8 md:h-10 lg:h-12" />
                                </Link>
                            </button>
                        ))
                    }
                </div>
                <div className="p-3">
                    <h2 className=" tracking-widest text-3xl font-semibold text-center uppercase font-Rancho mt-10 text-pink-500"> Lode All Product: {productData.length}</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                        {
                            productData?.map(singleProduct => <LodeSingleProduct
                                key={singleProduct._id}
                                singleProduct={singleProduct}
                            ></LodeSingleProduct>)
                        }
                    </div>
                </div>

            </div>
            
            {/* our team  */}
            <div>
                <div className="container">
                    <div className=" mt-5 md:p-5 rounded-md">
                        <div className="my-5 mx-auto max-w-2xl space-y-5 text-center p-2 md:p-4">
                            <h2 className=" tracking-widest text-3xl font-semibold text-center uppercase font-Rancho mt-10 text-pink-500">Here Are Our Team Members</h2>
                            <p>
                                Our team is a dynamic blend of creative minds and skilled
                                professionals. Together, we work harmoniously to tackle challenges,
                                innovate solutions, and drive success. With diverse expertise and
                                unwavering dedication, we are committed to achieving excellence and
                                making a positive impact in every endeavor we undertake.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 rounded-md">
                            {/* Team 01  */}
                            <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="2000"
                                className="teamCard transition-all duration-1000 p-5 border border-pink-500 rounded-md space-y-4"
                            >
                                <div className="img h-[285px] w-full overflow-hidden relative ">
                                    <img
                                        src={`https://i.ibb.co/949dbmC/Man-01.jpg`}
                                        className="h-full w-full rounded-md overflow-hidden border border-pink-500"
                                        alt="Team Member"
                                    />
                                    <div className=" teamIcon transition-all duration-500 hidden hover:flex  flex-col gap-5 justify-between items-center bg-pink-500 opacity-80 z-40 absolute top-0 right-0 w-1/3 p-5 h-full rounded-r-md text-2xl">
                                        <div className="facebook instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.facebook.com/johndoe`}>
                                                <BsFacebook></BsFacebook>
                                            </Link>
                                        </div>
                                        <div className="instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.instagram.com/johndoe`}>
                                                <BsInstagram></BsInstagram>
                                            </Link>
                                        </div>
                                        <div className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://github.com/johndoe`}>
                                                <BsGithub></BsGithub>
                                            </Link>
                                        </div>
                                        <div className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://wa.me/1234567890 `}>
                                                <BsWhatsapp></BsWhatsapp>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h2 className="text-2xl font-bold uppercase text-pink-500">John Doe</h2>
                                    <h4 className="text-xl font-semibold text-pink-500">Electrical  Engineer</h4>
                                </div>
                            </div>
                            {/* Team 02  */}
                            <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="2000"
                                className="teamCard transition-all duration-1000 p-5 border border-pink-500 rounded-md space-y-4"
                            >
                                <div className="img h-[285px] w-full overflow-hidden relative ">
                                    <img
                                        src={`https://i.ibb.co/PrX90Xc/Womane-02.jpg`}
                                        className="h-full w-full rounded-md overflow-hidden border border-pink-500"
                                        alt="Team Member"
                                    />
                                    <div className=" teamIcon transition-all duration-500 hidden hover:flex  flex-col gap-5 justify-between items-center bg-pink-500 opacity-80 z-40 absolute top-0 right-0 w-1/3 p-5 h-full rounded-r-md text-2xl">
                                        <div className="facebook instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.facebook.com/johndoe`}>
                                                <BsFacebook></BsFacebook>
                                            </Link>
                                        </div>
                                        <div className="instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.instagram.com/johndoe`}>
                                                <BsInstagram></BsInstagram>
                                            </Link>
                                        </div>
                                        <div className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://github.com/johndoe`}>
                                                <BsGithub></BsGithub>
                                            </Link>
                                        </div>
                                        <div className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://wa.me/1234567890 `}>
                                                <BsWhatsapp></BsWhatsapp>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h2 className="text-2xl font-bold uppercase text-pink-500">Jane Smith</h2>
                                    <h4 className="text-xl font-semibold text-pink-500">Software Engineer</h4>
                                </div>
                            </div>
                            {/* Team 03  */}
                            <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="2000"
                                className="teamCard transition-all duration-1000 p-5 border border-pink-500 rounded-md space-y-4"
                            >
                                <div className="img h-[285px] w-full overflow-hidden relative ">
                                    <img
                                        src={`https://i.ibb.co/0CQHM97/Man-02.jpg`}
                                        className="h-full w-full rounded-md overflow-hidden border border-pink-500"
                                        alt="Team Member"
                                    />
                                    <div className=" teamIcon transition-all duration-500 hidden hover:flex  flex-col gap-5 justify-between items-center bg-pink-500 opacity-80 z-40 absolute top-0 right-0 w-1/3 p-5 h-full rounded-r-md text-2xl">
                                        <div className="facebook instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.facebook.com/johndoe`}>
                                                <BsFacebook></BsFacebook>
                                            </Link>
                                        </div>
                                        <div className="instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.instagram.com/johndoe`}>
                                                <BsInstagram></BsInstagram>
                                            </Link>
                                        </div>
                                        <div className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://github.com/johndoe`}>
                                                <BsGithub></BsGithub>
                                            </Link>
                                        </div>
                                        <div className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://wa.me/1234567890 `}>
                                                <BsWhatsapp></BsWhatsapp>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h2 className="text-2xl font-bold uppercase text-pink-500">Alice Johnson</h2>
                                    <h4 className="text-xl font-semibold text-pink-500">Marketing Officer</h4>
                                </div>
                            </div>
                            {/* Team 04  */}
                            <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="2000"
                                className="teamCard transition-all duration-1000 p-5 border border-pink-500 rounded-md space-y-4"
                            >
                                <div className="img h-[285px] w-full overflow-hidden relative ">
                                    <img
                                        src={`https://i.ibb.co/pjHB3fW/Womane-01.jpg`}
                                        className="h-full w-full rounded-md overflow-hidden border border-pink-500"
                                        alt="Team Member"
                                    />
                                    <div className=" teamIcon transition-all duration-500 hidden hover:flex  flex-col gap-5 justify-between items-center bg-pink-500 opacity-80 z-40 absolute top-0 right-0 w-1/3 p-5 h-full rounded-r-md text-2xl">
                                        <div className="facebook instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.facebook.com/johndoe`}>
                                                <BsFacebook></BsFacebook>
                                            </Link>
                                        </div>
                                        <div className="instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://www.instagram.com/johndoe`}>
                                                <BsInstagram></BsInstagram>
                                            </Link>
                                        </div>
                                        <div className="github instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://github.com/johndoe`}>
                                                <BsGithub></BsGithub>
                                            </Link>
                                        </div>
                                        <div className="whatsapp instagram border border-pink-500 text-pink-500 font-bold hover:text-pink-800 bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                            <Link to={`https://wa.me/1234567890 `}>
                                                <BsWhatsapp></BsWhatsapp>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <h2 className="text-2xl font-bold uppercase text-pink-500">Bob Wilson</h2>
                                    <h4 className="text-xl font-semibold text-pink-500">Branch Manager</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ContactUS></ContactUS>
        </div>
    );
};

export default HomePage;
