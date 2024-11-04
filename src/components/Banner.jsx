import banner from '../assets/banner.jpg'

function Banner() {

    return (
        <div className="banner">

            <section className={`w-11/12 mx-auto border-l border-r border-b px-2 pb-2 rounded-b-2xl md:mb-12 lg:mb-36 xl:mb-64`}>

                <div className="bg-[#943fdd] text-white rounded-b-xl md:text-center p-4 pb-72 space-y-5 relative">
                    <p className="text-3xl md:text-5xl font-bold max-w-[25ch] mx-auto !leading-tight md:pt-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>
                    <p className="max-w-[65ch] mx-auto text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="bg-white text-[#943fdd] font-semibold px-6 py-3 rounded-full">Shop Now</button>

                    <div className='w-11/12 md:w-8/12 absolute max-sm:bottom-4 left-1/2 transform -translate-x-1/2 p-4 border border-white bg-[#ffffff80] rounded-3xl'>
                        <img className='rounded-2xl mx-auto xl:h-[500px] w-full object-cover' src={banner} alt="vr headset image" />
                    </div>
                    
                </div>

            </section>

        </div>

    )
}

export default Banner;