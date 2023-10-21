import PropTypes from 'prop-types'
import {AiFillStar} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { BsArrowRight,BsPencil} from "react-icons/bs"


const LodeSingleProduct = ({singleProduct}) => {
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
        <div className='border-2 flex flex-col lg:flex-row gap-5 p-3 rounded-md shadow-lg items-center'>
            <div className="flex-1 img overflow-hidden rounded-md ">
                <img
                    src={photoURL}
                    alt={productName}
                    className="w-64 h-72  rounded-lg overflow-hidden"/>
            </div>
            <div className=" flex-1 text flex justify-between flex-col space-y-2">
                <h2 className='text-xl font-semibold font-Raleway'>{productName}</h2>
                <p>Brand: {brand}</p>
                <p>Price: {price}BDT</p>
                <p>Type: {type}</p>
                <div>
                    Description:
                    {
                        description.length>100? <p>{description.slice(0,100)}...</p>: <p>{description}</p>
                    }
                </div>
                <div>
                    {
                        rating > 4.5
                            ? (
                                <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/> {rating}
                                </div>
                            )
                            : (
                                <div>
                                    {
                                        rating > 3.5
                                            ? (
                                                <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar className='text-black'/> {rating}
                                                </div>
                                            )
                                            : (
                                                <div>
                                                    {
                                                        rating > 2.5
                                                            ? (
                                                                <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                                                    <AiFillStar/>
                                                                    <AiFillStar/>
                                                                    <AiFillStar/>
                                                                    <AiFillStar className='text-black'/>
                                                                    <AiFillStar className='text-black'/> {rating}
                                                                </div>
                                                            )
                                                            : (
                                                                <div>
                                                                    {
                                                                        rating > 1.5
                                                                            ? (
                                                                                <div className='flex text-yellow-500 text-xl items-center gap-2'>
                                                                                    <AiFillStar/>
                                                                                    <AiFillStar/>
                                                                                    <AiFillStar className='text-black'/>
                                                                                    <AiFillStar className='text-black'/>
                                                                                    <AiFillStar className='text-black'/> {rating}
                                                                                </div>
                                                                            )
                                                                            : (
                                                                                <div className='flex text-black text-xl items-center gap-2'>
                                                                                    <AiFillStar className='text-yellow-500'/>
                                                                                    <AiFillStar/>
                                                                                    <AiFillStar/>
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
                <div className='flex flex-col md:flex-row lg:flex-col gap-5  w-full  md:justify-center lg:justify-start'>
                    <Link to={`/updateProduct/${_id}`}>
                        <button className='p-1 px-4 rounded-md  font-Rancho text-lg bg-pink-500 hover:text-pink-500 hover:bg-white border border-pink-500 transition-all duration-300 text-white flex justify-center items-center gap-2 w-[100%]'>
                        <BsPencil className="font-bold text-2xl "/>
                        Edit
                        <BsArrowRight className="font-bold text-2xl "/>
                        </button>
                    </Link>
                    <Link to={`/productDetails/${_id}`}>
                        <button className='p-1 px-4 rounded-md w-full font-Rancho text-lg bg-pink-500 hover:text-pink-500 hover:bg-white border border-pink-500 transition-all duration-300 text-white flex justify-center items-center gap-2'>See Details 
                        <BsArrowRight className="font-bold text-2xl "/></button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

LodeSingleProduct.propTypes = {
    singleProduct: PropTypes.object.isRequired
}

export default LodeSingleProduct