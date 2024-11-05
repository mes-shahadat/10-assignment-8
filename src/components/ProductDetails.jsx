import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from "react-router-dom";
import { cartContext, wishContext } from "./context";
import toast from 'react-hot-toast';
import ScrollToTop from "./ScrollToTop";

function ProductDetails() {

    const params = useParams();
    const products = useLoaderData();
    const product = products.find(prod => prod.product_id === Number(params.id));

    const [cartArr, setCartArr] = useContext(cartContext);
    const [wishArr, setWishArr] = useContext(wishContext);

    return (
        <section className="bg-[#943fdd] text-white pb-56 mb-80">

            <ScrollToTop />

            <div className="w-11/12 mx-auto text-center space-y-4 py-8 relative">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="max-w-[65ch] mx-auto text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="grid md:grid-cols-4 lg:grid-cols-3 gap-6 p-6 rounded-2xl text-start bg-white text-black xl:m-36 absolute top-[100%]">
                    <img className="rounded-2xl h-full object-cover md:col-span-2  lg:col-span-1" src={product.product_image} alt="" />

                    <div className="md:col-span-2 space-y-3">
                        <h3 className="text-xl font-bold">{product.product_title}</h3>
                        <p className="font-semibold text-gray-800">Price: ${product.price}</p>
                        <small className="text-[#389b24] bg-[#eaf5e7] border border-[#389b24] rounded-full px-4 py-1 inline-block mt-2">{product.availability ? "In Stock" : "Out of Stock"}</small>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="font-semibold text-gray-800">Specification:</p>
                        <ul className="text-gray-500">
                            <ol className="list-decimal pl-5">
                                {
                                    product.specification.map(
                                        (item, i) => <li key={i}>{item}</li>
                                    )
                                }
                            </ol>
                        </ul>

                        <p className="font-semibold text-gray-800">Rating: </p>
                        <div className="flex items-center gap-4 !-mt-1">
                            <ReactStars
                                count={5}
                                size={32}
                                isHalf={true}
                                value={product.rating}
                                activeColor="#ffd700"
                            /> <small className="bg-[#f2f2f3] border px-3 py-1 rounded-full">{product.rating}</small>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="bg-[#943fdd] rounded-full inline-flex text-white font-semibold items-center px-3 py-1" onClick={() => {
                                let cartArrCopy = cartArr;
                                cartArrCopy.ids.push(product.product_id);
                                cartArrCopy.total_price += product.price;
                                setCartArr({ ...cartArrCopy });
                                toast.success('successfully added to your cart');
                            }}>
                                Add To Card
                                <svg className="w-9 p-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
                            </button>

                            <button disabled={wishArr.ids.includes(product.product_id) ? 'disabled' : ''} className="bg-white rounded-full border border-gray-400 hover:bg-[#943fdd]" onClick={() => {
                                let wishArrCopy = wishArr;
                                wishArrCopy.ids.push(product.product_id);
                                wishArrCopy.total_price += product.price;
                                setWishArr({ ...wishArrCopy });
                                toast.success('successfully added to your wishlist');
                            }}>
                                <svg className="w-10 p-2 text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductDetails;