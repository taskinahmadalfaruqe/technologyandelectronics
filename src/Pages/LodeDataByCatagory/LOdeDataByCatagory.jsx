import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import {useEffect, useRef, useState} from "react";
import LodeSingleProduct from "../../Component/LodeSingleProduct/LodeSingleProduct";
import {BsArrowLeft} from "react-icons/bs";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination, Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css"

const LOdeDataByCatagory = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle
            .current
            .style
            .setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const allProductData = useLoaderData();
    const [catagoryData, setCatagoryData] = useState([]);
    const {catagory} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const filterData = allProductData.filter(
            data => data.brand.toLowerCase() === catagory.toLowerCase()
        )
        if (filterData) {
            setCatagoryData(filterData)
        }
    }, [allProductData, catagory])
    return (
        <div className="p-1">
            <Navbar></Navbar>
            <div className="text-center container mt-5 ">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper">

                    <SwiperSlide className="rounded-lg overflow-hidden ">
                        <img
                            src={`https://i.ibb.co/TkgwBSM/1803-min.jpg`}
                            className="rounded-md object-cover "
                            alt="Banner Image"/>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-full h-full ">
                        <img
                            src={`https://i.ibb.co/W645kpQ/7577-min.jpg`}
                            className="rounded-md object-cover "
                            alt="Banner Image"/>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-lg overflow-hidden w-full h-full ">
                        <img
                            src={`https://i.ibb.co/P96rqX4/5565175-min.jpg`}
                            className="rounded-md object-cover "
                            alt="Banner Image"/>
                    </SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
            {
                catagoryData.length > 0
                    ? <div className="p-3 container">
                            <h2
                                className=" tracking-widest text-3xl font-semibold text-center uppercase font-Rancho mt-10 text-pink-500">
                                Available Product In This Brand: {catagoryData.length}</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                                {
                                    catagoryData.map(
                                        singleProduct => <LodeSingleProduct key={singleProduct._id} singleProduct={singleProduct}></LodeSingleProduct>
                                    )
                                }
                            </div>
                        </div>
                    : <div className="container flex justify-center items-center my-10 p-5">
                            <img src={`https://i.ibb.co/BwkBpQb/clipart1533013.png`} alt="Image"/>
                        </div>
            }
            <div>
                <div className="w-full flex justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-sm font-Rancho uppercase  text-white bg-pink-500 border border-pink-500 rounded-md p-2 w-full  md:w-1/2 hover:text-pink-500 hover:bg-white transition-all duration-200 flex justify-center items-center gap-2">
                        <BsArrowLeft className="font-bold text-2xl "/>Back To Previous Page</button>
                </div>
            </div>
        </div>
    );
};

export default LOdeDataByCatagory;