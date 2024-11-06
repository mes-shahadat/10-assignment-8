import { useContext, useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { cartContext, wishContext } from "./context";

function Nav() {

    const [shown, setShown] = useState('');

    const [cartArr] = useContext(cartContext);
    const [wishArr] = useContext(wishContext);

    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(
        () => {

            const title = document.getElementsByTagName("title")[0];

            if (pathname === "/") {
                title.innerText = "Gadgets | Gadgets Haven";
            }
            else if (pathname === "/stats") {
                title.innerText = "Statistics | Gadgets Haven";
            }
            else if (pathname === "/dashboard") {
                title.innerText = "Dashboard | Gadgets Haven";
            }
            else if (pathname === "/about-us") {
                title.innerText = "About | Gadgets Haven";
            }
            else if (pathname === "/contact-us") {
                title.innerText = "Contact | Gadgets Haven";
            }
            else {
                title.innerText = "Error | Gadgets Haven";
            }
        });

    const handleShown = (val) => {

        if (shown === val) {
            setShown('');
        }
        else {
            setShown(val);
        }

    }

    return (
        <>
            <header className={`w-11/12 mx-auto ${pathname === '/' || pathname.includes("/products/") ? "border-t border-l border-r" : " "} px-2 pt-2 rounded-t-3xl mt-2`}>

                <nav className={`flex max-sm:flex-col items-center sm:justify-around ${pathname === '/' || pathname.includes("/products/") ? "bg-[#943fdd] text-white" : " "} py-5 px-2 rounded-t-2xl`}>
                    <Link to='/' className="text-xl font-extrabold max-sm:pb-4 hover:text-amber-400">Gadget Heaven</Link>

                    <div className="flex gap-2 sm:gap-5">
                        <NavLink to='/' className='max-sm:hidden hover:text-amber-400'>Home</NavLink>
                        <NavLink to='/stats' className="hover:text-amber-400">Statistics</NavLink>
                        <NavLink to='/dashboard' className="hover:text-amber-400">Dashboard</NavLink>

                        <div className="inline-block relative hover:text-amber-400">
                            <div className="inline-flex cursor-pointer" onClick={() => handleShown('links')}>
                                Support
                                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                            </div>

                            {
                                shown === "links" && <ul className="absolute z-10 w-max right-0 bg-white text-black p-4 mt-2 rounded-xl space-y-2 border">
                                    <li><NavLink to="/about-us" className="hover:text-amber-400">About us</NavLink></li>
                                    <li><NavLink to="/contact-us" className="hover:text-amber-400">Contact us</NavLink></li>
                                </ul>
                            }
                        </div>

                    </div>

                    <div className="inline-flex gap-4 max-sm:hidden">
                        <div className="relative">
                            <div className="relative">
                                <button className="w-9 bg-white rounded-full p-2 text-black hover:bg-gray-100" onClick={() => handleShown('cart')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
                                </button>
                                {
                                    cartArr.ids.length !== 0 && <small className="absolute -top-4 -right-3 text-red-600 bg-white rounded-xl px-2 border">{cartArr.ids.length}</small>
                                }
                                
                            </div>

                            {
                                shown === "cart" && <div className="w-max bg-white absolute right-0 top-10 z-10 p-3 rounded-xl space-y-3 border">
                                    <p className="text-black text-xl font-bold">{cartArr.ids.length} Items in Cart</p>
                                    <hr />
                                    <p className="font-semibold text-[#9140df]">Subtotal: ${cartArr.total_price}</p>
                                    <button className="bg-[#9140df] text-white font-semibold px-3 py-2 rounded-full" onClick={() => navigate("/dashboard")}>dashboard</button>
                                </div>
                            }

                        </div>

                        <div className="relative">
                            <div className="relative">
                                <button className="w-9 bg-white rounded-full p-2 text-black hover:bg-gray-100" onClick={() => handleShown('wishlist')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                                </button>
                                {
                                    wishArr.ids.length !== 0 && <small className="absolute -top-4 -right-3 text-red-600 bg-white rounded-xl px-2 border">{wishArr.ids.length}</small>
                                }
                                
                            </div>

                            {
                                shown === 'wishlist' && <div className="w-max bg-white absolute right-0 top-10 z-10 p-3 rounded-xl space-y-3 border">
                                    <p className="text-black text-xl font-bold">{wishArr.ids.length} Items in Wishlist</p>
                                    <hr />
                                    <p className="font-semibold text-[#9140df]">Subtotal: ${wishArr.total_price}</p>
                                    <button className="bg-[#9140df] text-white font-semibold px-3 py-2 rounded-full" onClick={() => navigate("/dashboard", { state: { cart: false } })}>dashboard</button>
                                </div>
                            }

                        </div>
                    </div>

                </nav>

            </header>

        </>
    )
}

export default Nav;