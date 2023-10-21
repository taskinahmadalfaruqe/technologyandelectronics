
import PropTypes from 'prop-types'
import { AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LodeCartData = ({ singleData, setCartDataLode, cartDataLode }) => {
    const navigate=useNavigate()
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
                fetch(`https://technology-server-three.vercel.app/cartProduct/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = cartDataLode.map(val => val._id !== _id)
                            setCartDataLode(remaining)

                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your Product Has Been Successfully Deleted',
                                showConfirmButton: true,
                                timer: 1500
                            })
                            navigate('/mycart')
                        }
                    })


            }
        })
    }

    const { _id, brand, description, photoURL, price, productName, rating, type } = singleData;
    return (
        <div>
            {
                cartDataLode.length > 0 ?
                    <div className='border-2 flex flex-col lg:flex-row gap-5 p-3 rounded-md shadow-lg items-center'>
                        <div className="flex-1 img overflow-hidden rounded-md ">
                            <img
                                src={photoURL}
                                alt={productName}
                                className="w-64 h-72  rounded-lg overflow-hidden" />
                        </div>
                        <div className=" flex-1 text flex justify-between flex-col space-y-2">
                            <h2 className='text-xl font-semibold font-Raleway'>{productName}</h2>
                            <p>Brand: {brand}</p>
                            <p>Price: {price}BDT</p>
                            <p>Price: {_id}</p>
                            <p>Type: {type}</p>
                            <div>
                                Description:
                                {
                                    description.length > 100 ? <p>{description.slice(0, 100)}...</p> : <p>{description}</p>
                                }
                            </div>
                            <div>
                                {
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
                            <div className='flex justify-between items-center'>
                                <Link>
                                    <button
                                        onClick={() => handelDelete(_id)}
                                        className="p-1 px-4 rounded-md  font-Rancho text-lg bg-pink-500 hover:text-pink-500 hover:bg-white border border-pink-500 transition-all duration-300 text-white flex justify-center items-center gap-2">
                                        <AiOutlineDelete className="font-bold text-2xl " />
                                        Delete
                                        <BsArrowRight className="font-bold text-2xl " />
                                    </button>
                                </Link>
                                <Link to={`/productDetails/${_id}`}>
                                    <button className='p-1 px-4 rounded-md  font-Rancho text-lg bg-pink-500 hover:text-pink-500 hover:bg-white border border-pink-500 transition-all duration-300 text-white flex justify-center items-center gap-2'>See Details
                                        <BsArrowRight className="font-bold text-2xl " /></button>
                                </Link>
                            </div>
                        </div>
                    </div> : ''
            }
        </div>
    )
}

LodeCartData.propTypes = {
    singleData: PropTypes.object.isRequired,
    setCartDataLode: PropTypes.func.isRequired,
    cartDataLode: PropTypes.array.isRequired,
}

export default LodeCartData