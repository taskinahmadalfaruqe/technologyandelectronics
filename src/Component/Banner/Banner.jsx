import Navbar from "../Navbar/Navbar";

const Banner = () => {
    return (
        <div style={{ backgroundImage: `URL('https://i.ibb.co/X3s9Fw2/bg.jpg')`, backgroundRepeat: 'no-repeat', objectFit: "cover", backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div style={{ background: 'rgba(0,0,0,0.8)' }}>
                <Navbar></Navbar>
                <div className="container h-[87vh] flex justify-center items-center">

                    <h1 className=" text-2xl lg:text-3xl xl:text-5xl font-bold text-pink-500 md:max-w-xl xl:max-w-3xl mx-auto text-center leading-[40px] lg:leading-[60px] xl:leading-[80px]">Discover Cutting-Edge Gadgets at Our Tech & Electronics E-Shop!</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;