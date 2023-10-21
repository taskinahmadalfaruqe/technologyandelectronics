
import Navbar from "../../Component/Navbar/Navbar";
import LodeCartData from "../../Component/LOdeCartData/LodeCartData";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartProductData = useLoaderData()
    const [cartDataLode, setCartDataLode] = useState([]);
    useEffect(() => {
        setCartDataLode(cartProductData)
    }, [cartProductData])

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="flex flex-wrap my-10 ">
                    {
                        cartDataLode.length > 0
                            ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {
                                    cartDataLode.map(
                                        singleData => <LodeCartData
                                            key={singleData._id}
                                            singleData={singleData}
                                            cartDataLode={cartDataLode}
                                            setCartDataLode={setCartDataLode}
                                        ></LodeCartData>
                                    )
                                }
                            </div>
                            :
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={`https://i.ibb.co/BwkBpQb/clipart1533013.png`}
                                    alt="Image" />
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;