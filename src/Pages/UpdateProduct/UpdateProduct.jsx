import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const update = useLoaderData();
    const navigate = useNavigate();
    const {
        _id,
        brand,
        description,
        photoURL,
        price,
        productName,
        rating,
        type,
    } = update;

    const handelUpdateProduct = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const productName = data.get('productName');
        const brand = data.get('Brand');
        const type = data.get('Type');
        const price = data.get('Price');
        const description = data.get('Description');
        const rating = data.get('Rating');
        const photoURL = data.get('PhotoURL');
        const newlyUpdateProduct = {
            productName,
            brand,
            type,
            price,
            description,
            rating,
            photoURL,
        };

        fetch(`https://technology-server-three.vercel.app/allProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newlyUpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    navigate('/')
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Product Has Been Successfully Updated',
                        showConfirmButton: true,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                navigate("/updateProduct")
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Sorry Somthing Is Wrong!',
                    showConfirmButton: true,
                    timer: 1500,
                    footer: `${error}`
                })
            });


    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="space-y-4 w-full md:w-2/3  mx-auto mt-5">
                    <div className="bg-[#F4F3F0] p-2 rounded-md">
                        <h2 className="text-center font-Rancho text-pink-500 text-5xl">Update Product</h2>
                        <div>
                            <form className="space-y-5 mb-5 text-black" onSubmit={handelUpdateProduct}>

                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="productName">Product Name:</label>
                                        <input required defaultValue={productName} type="text" name="productName" id="productName" placeholder="Enter Product Name" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="Brand">Brand</label>
                                        <input required defaultValue={brand} type="text" name="Brand" id="Brand" placeholder="Enter Brand Name" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="Type">Product Type:</label>
                                        <input required defaultValue={type} type="text" name="Type" id="Type" placeholder="Enter Product Type" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="Price">Price</label>
                                        <input required defaultValue={price} type="text" name="Price" id="Price" placeholder="Enter Price" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="Description">Short description:</label>
                                        <input required type="text" defaultValue={description} name="Description" id="Description" placeholder="Enter Short description" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="Rating">Rating</label>
                                        <input required defaultValue={rating} type="text" name="Rating" id="Rating" placeholder="Enter Rating" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col  justify-start  p-1 flex-1">
                                    <label htmlFor="PhotoURL">Photo URL</label>
                                    <input required defaultValue={photoURL} type="text" name="PhotoURL" id="PhotoURL" placeholder="Enter Photo URL" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                </div>
                                <div>
                                    <button type="submit" className="font-Rancho bg-pink-500 text-white w-full border border-pink-500 rounded-sm text-xl "> Update Product: {productName}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;