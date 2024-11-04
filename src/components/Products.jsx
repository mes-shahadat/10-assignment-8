import { NavLink, Outlet } from "react-router-dom";

function Products() {

    return (
        <section className="w-11/12 mx-auto pt-8 mb-24">

            <h2 className="md:text-3xl font-bold w-max mx-auto mb-8">Explore Cutting-Edge Gadgets</h2>

            <div className="grid md:grid-cols-12 gap-4">

                <div className="md:col-span-4 lg:col-span-3 xl:col-span-2 text-gray-500 rounded-xl">

                    <div className="prod-nav flex flex-col w-full text-gray-500 bg-white p-2 lg:p-43 space-y-4 max-sm:text-center rounded-xl">
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/'>All Product</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/Home'>Home Appliances</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/Kitchen'>Kitchen Appliances</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/Electronics'>Electronics</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/Audio'>Audio</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/Fitness'>Fitness</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/Outdoor'>Outdoor</NavLink>
                        <NavLink className='bg-[#f2f2f3] px-4 py-3 rounded-full text-sm' to='/products/misc'>Misc</NavLink>
                    </div>
                </div>

                <Outlet/>

            </div>

        </section>
    )
}

export default Products;