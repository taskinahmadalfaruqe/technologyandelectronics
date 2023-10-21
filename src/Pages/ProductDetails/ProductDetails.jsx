import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { AiFillStar, AiOutlineDelete } from "react-icons/ai"
import { BsArrowLeft, BsArrowRight, BsCart4 } from "react-icons/bs"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const ProductDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const LodeData = useLoaderData();

    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        const dataFilter = LodeData.find((val) => val._id === id);
        if (dataFilter) {
            setSingleProduct(dataFilter);
        }
    }, [LodeData, id]);

    //HANDEL DELETE
    const handelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-server-three.vercel.app/allProduct/${_id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        navigate('/')
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your Product Has Been Successfully Deleted',
                            showConfirmButton: true,
                            timer: 1500
                        })
                    }
                })

                
            }
        })
    }


    //HANDEL BUY
    const handelBuy = (_id) => {
        const singleProduct = {_id, productName, brand, type, price, description, rating, photoURL }
        
        fetch("https://technology-server-three.vercel.app/cartProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(singleProduct),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                if(data.acknowledged){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Product Has Been Add To Cart Successfully',
                        showConfirmButton: true,
                        timer: 1500
                      })
                    navigate('/myCart')
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }

    const {
        _id,
        brand,
        description,
        photoURL,
        price,
        productName,
        rating,
        type
    } = singleProduct;

    return (
        <div>
            <Navbar />
            <div className="container space-y-5">
                <div className="flex justify-center items-center h-[70vh]">
                    <img
                        src={photoURL}
                        alt={singleProduct.productName}
                        className="h-[70vh] rounded-md overflow-hidden" />
                </div>
                <div
                    className="w-full flex flex-col md:flex-row gap-5 justify-center items-center max-w-2xl mx-auto">
                    <button
                        onClick={()=>handelDelete(_id)}
                        className="text-xl font-Rancho uppercase font-semibold text-white bg-pink-500 border border-pink-500 rounded-md p-2 w-full md:w-1/2 hover:text-pink-500 hover:bg-white transition-all duration-200 tracking-[10px] flex justify-center items-center gap-3">
                        <AiOutlineDelete className="font-bold text-2xl " />
                        Delete
                        <BsArrowRight className="font-bold text-2xl " />
                    </button>
                    <button
                        onClick={() => handelBuy(_id)}
                        className="text-xl font-Rancho uppercase font-semibold text-white bg-pink-500 border border-pink-500 rounded-md p-2 w-full  md:w-1/2 hover:text-pink-500 hover:bg-white transition-all duration-200 tracking-[10px] flex justify-center items-center gap-3">
                        <BsCart4 className="font-bold text-2xl " />
                        Buy Now
                        <BsArrowRight className="font-bold text-2xl " />
                    </button>

                </div>
                <div className="space-y-3 mt-5">
                    <h2
                        className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold text-pink-500 mt-10">{productName}</h2>
                    <div
                        className="font-semibold text-lg flex gap-5 flex-col md:flex-row justify-center items-center">
                        <p >Brand: {brand}</p>
                        <p>Price: {price}BDT</p>
                        <div className="flex gap-2 justify-center items-center">
                            Rating: {
                                rating > 4.5
                                    ? (
                                        <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar /> {rating}
                                        </div>
                                    )
                                    : (
                                        <div>
                                            {
                                                rating > 3.5
                                                    ? (
                                                        <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar />
                                                            <AiFillStar className='text-black' /> {rating}
                                                        </div>
                                                    )
                                                    : (
                                                        <div>
                                                            {
                                                                rating > 2.5
                                                                    ? (
                                                                        <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                                                            <AiFillStar />
                                                                            <AiFillStar />
                                                                            <AiFillStar />
                                                                            <AiFillStar className='text-black' />
                                                                            <AiFillStar className='text-black' /> {rating}
                                                                        </div>
                                                                    )
                                                                    : (
                                                                        <div>
                                                                            {
                                                                                rating > 1.5
                                                                                    ? (
                                                                                        <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                                                                            <AiFillStar />
                                                                                            <AiFillStar />
                                                                                            <AiFillStar className='text-black' />
                                                                                            <AiFillStar className='text-black' />
                                                                                            <AiFillStar className='text-black' /> {rating}
                                                                                        </div>
                                                                                    )
                                                                                    : (
                                                                                        <div className='flex text-black text-xl items-center gap-2'>
                                                                                            <AiFillStar className='text-yellow-500' />
                                                                                            <AiFillStar />
                                                                                            <AiFillStar />
                                                                                            <AiFillStar />
                                                                                            <AiFillStar /> {rating}
                                                                                        </div>
                                                                                    )
                                                                            }
                                                                        </div>
                                                                    )
                                                            }
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                    <h4 className="text-center text-lg font-semibold">Type: {type}</h4>
                    <div className="p-2 lg:p-5">{description}</div>
                    <div className="w-full flex justify-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-sm font-Rancho uppercase  text-white bg-pink-500 border border-pink-500 rounded-md p-2 w-full  md:w-1/2 hover:text-pink-500 hover:bg-white transition-all duration-200 flex justify-center items-center gap-2">
                            <BsArrowLeft className="font-bold text-2xl " />Back To Previous Page</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
