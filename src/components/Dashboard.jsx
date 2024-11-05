import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import WishList from "./Wishlist";
import { useLoaderData, useLocation } from "react-router-dom";
import { cartContext, wishContext } from "./context";

function Dashboard() {

    const [cartActive, setCartActive] = useState(true);
    const param = useLocation();
    
    useEffect(
        ()=> param.state?.cart === undefined ? setCartActive(true) : setCartActive(param.state.cart), []
    )
    
    const [cartArr, setCartArr] = useContext(cartContext);
    const [wishArr, setWishArr] = useContext(wishContext);
    const products = useLoaderData();
    let cartProducts = [];
    let wishProducts = [];


    for (let i = 0; i < cartArr.ids.length; i++) {
        products.forEach(
            prod => { if (prod.product_id === cartArr.ids[i]) { cartProducts.push(prod) } }
        )
    }

    for (let i = 0; i < wishArr.ids.length; i++) {
        products.forEach(
            prod => { if (prod.product_id === wishArr.ids[i]) { wishProducts.push(prod) } }
        )
    }


    return (
        <>
            <section className="bg-[#943fdd] text-white pb-3">

                <div className="w-11/12 mx-auto text-center space-y-4 py-8 relative">
                    <h2 className="text-3xl font-bold">Dashboard</h2>
                    <p className="max-w-[65ch] mx-auto text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <div className="inline-flex gap-4 ">
                        <button className={`border px-10 py-2 rounded-full ${cartActive ? "bg-white text-[#8f3dd6] font-bold" : ' '}`} onClick={()=> setCartActive(true)}>Cart</button>
                        <button className={`border px-10 py-2 rounded-full ${!cartActive ? "bg-white text-[#8f3dd6] font-bold" : ' '}`} onClick={()=> setCartActive(false)}>Wishlist</button>
                    </div>

                </div>

            </section>

            {
                cartActive ? <Cart cartProducts={cartProducts} cartArr={cartArr} setCartArr={setCartArr}/> : <WishList wishProducts={wishProducts} wishArr={wishArr} setWishArr={setWishArr}/>
            }
        </>
    )
}

export default Dashboard;