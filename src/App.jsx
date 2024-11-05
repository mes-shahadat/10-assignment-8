import { Outlet } from "react-router-dom";
import { useState } from "react";
import { cartContext, wishContext } from "./components/context";
import { Toaster } from 'react-hot-toast';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {

  const [cartArr, setCartArr] = useState({ ids: [], total_price: 0 });
  const [wishArr, setWishArr] = useState({ ids: [], total_price: 0 });

  return (
    <>
      <cartContext.Provider value={[cartArr, setCartArr]}>
        <wishContext.Provider value={[wishArr, setWishArr]}>
          <Nav />
          <Outlet />
        </wishContext.Provider>
      </cartContext.Provider>
      <Toaster />
      <Footer />

      <div style={{height: "100vh"}}></div>
    </>
  )
}