import { useRef } from "react";
import tickIcon from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function Cart({ cartProducts, cartArr, setCartArr }) {

    const navigate = useNavigate();
    const dialoagRef = useRef();

    const handlePurchase = () => {
        
        dialoagRef.current.showModal();
        cartArr.ids = [];
        setCartArr({...cartArr})
    }
    const handleClose = () => {
        
        cartArr.total_price = 0;
        setCartArr({...cartArr})
        dialoagRef.current.close()
        navigate('/');
    };

    const sortDescending = () => {
        let sorted = cartProducts.sort((a, b) => b.price - a.price);
        let copy = sorted.map(
            (item) => item.product_id
        )
        cartArr.ids = copy;
        setCartArr({...cartArr})
    }

    const handleDelete = (id, price) => {

        let arr = cartProducts.map(
            prod => {
                if (prod.product_id !== id) {
                    return prod.product_id
                } else { id = '' }
            }
        )

        cartArr.ids = arr.filter( element => element !== undefined);
        cartArr.total_price -= price

        toast.error('successfully deleted from cart');
        setCartArr({...cartArr});
    }

return (
    <>
        <dialog className="text-center p-10 rounded-2xl space-y-3" ref={dialoagRef}>
            <img className="mx-auto" src={tickIcon} alt="" />
            <p className="text-2xl font-bold">Payment Successfull</p>
            <hr />
            <p className="text-gray-500 font-semibold">Thanks for purchasing.</p>
            <p className="text-gray-500 font-semibold">Total: ${cartArr.total_price}</p>
            <button className="font-semibold px-2 py-1 border bg-[#edecec] w-full rounded-full" onClick={handleClose}>Close</button>
        </dialog>

        <section className="md:w-10/12 mx-auto mb-40 p-4">

            <div className="flex max-sm:flex-col justify-between md:items-center">
                <h2 className="text-xl font-bold max-sm:mb-2">Cart</h2>

                <div className="flex max-sm:flex-col md:items-center md:gap-4">
                    <p className="text-xl font-bold max-sm:mb-4">Total cost: ${cartArr.total_price}</p>

                    <div>

                        <button className="mt-1 inline-flex items-center gap-2 text-[#985fc7] font-semibold border border-[#985fc7] px-5 py-2 rounded-full mr-4 mb-2" onClick={ sortDescending }>
                            Sort by Price
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 18V21H19V18H17V15H23V18H21ZM5 18V21H3V18H1V15H7V18H5ZM11 6V3H13V6H15V9H9V6H11ZM11 11H13V21H11V11ZM3 13V3H5V13H3ZM19 13V3H21V13H19Z"></path></svg>
                        </button>

                        <button className=" text-white bg-[#9e42e3] border border-[#985fc7] px-5 py-2 rounded-full" onClick={handlePurchase} disabled={cartArr.total_price === 0 ? 'disabled' : ''} >
                            Purchase
                        </button>

                    </div>
                </div>
            </div>

            <div>

                {
                    cartProducts.map(
                        (product, index) => <div key={index} className="flex max-sm:flex-col gap-6 p-5 bg-white rounded-2xl mt-5">
                            <img className="md:h-32 rounded-2xl" src={product.product_image} alt="" />

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold">{product.product_title}</h3>
                                <p className="text-gray-800">{product.description}</p>
                                <p className="text-lg font-semibold text-gray-800">Price: ${product.price}</p>
                            </div>

                            <button className="w-10 text-red-600 border border-rose-600 p-2 h-min rounded-full max-sm:mx-auto md:ml-auto" onClick={()=> handleDelete(product.product_id, product.price)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                            </button>
                        </div>
                    )
                }

            </div>
        </section>
    </>
)
}

export default Cart;