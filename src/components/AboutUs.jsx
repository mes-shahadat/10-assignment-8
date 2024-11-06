
function AboutUs() {

    return (
        <>
            <section className="w-10/12 mx-auto mb-32">

                <h2 className="text-3xl font-bold my-10">About us</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">Welcome</h3>
                        <p className="text-gray-600 p-4 bg-white rounded-xl">At Gadget Heaven, we are passionate about bringing you the latest and greatest in technology and innovation. <br /> <br /> Our mission is to provide you with cutting-edge gadgets and accessories that enhance your lifestyle and elevate your tech experience.</p>
                    </div>

                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">Our Story</h3>
                        <p className="text-gray-600 p-4 bg-white rounded-xl flex-1">Founded in 2024, Gadget Heaven started with a simple idea: to make advanced technology accessible to everyone. <br /> <br /> Over the years, we have grown into a trusted source for high-quality gadgets, from smart devices to essential home appliances.</p>
                    </div>

                    <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 my-4">Our Commitment</h3>
                        <p className="text-gray-600 p-4 bg-white rounded-xl">We are committed to providing exceptional customer service and support. Our team is here to help you with any questions or concerns you may have. <br /> <br /> We believe in building lasting relationships with our customers and ensuring your satisfaction with every purchase.</p>
                    </div>
                </div>

                <hr className="my-20" />

                <div className="gap-4 justify-between">

                    <div className="text-gray-500">
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">What We Offer</h3>
                        <div className="space-y-1 py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600 w-max mx-auto">Home Appliances</strong>
                                <p>Upgrade your home with our range of smart and efficient appliances.</p>
                            </div>

                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600">Electronics</strong>
                                <p>Discover the latest in audio, visual, and computing technology.</p>
                            </div>

                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600">Fitness & Outdoor</strong>
                                <p>Stay active and enjoy the outdoors with our fitness and outdoor gear.</p>
                            </div>

                            <div className="space-y-2 bg-white p-4 rounded-xl">
                                <strong className="text-gray-600">Accessories</strong>
                                <p>Find the perfect accessories to complement your tech.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-20" />

                    <div className="text-gray-600 my-4 flex max-lg:flex-col gap-4 justify-between">

                        <div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 my-2">Our History</h3>

                                <p className="max-w-[45ch] md:p-4 rounded-tl-xl rounded-tr-xl"> Our extensive experience in the industry has enabled us to refine our processes, expand our product range, and enhance customer satisfaction.</p>
                            </div>

                            <div className="flex max-md:flex-col gap-4 pt-6 md:p-6 rounded-br-xl rounded-bl-xl w-max">
                                <div>
                                    <p className="text-6xl font-black text-gray-700">12</p>
                                    <p>Years Experience</p>
                                </div>

                                <div>
                                    <p className="text-6xl font-black text-gray-700">10K</p>
                                    <p>Happy Customers</p>
                                </div>

                                <div>
                                    <p className="text-6xl font-black text-gray-700">100%</p>
                                    <p>Clients Satisfaction</p>
                                </div>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-11">
                            <div className="flex lg:flex-col xl:flex-row gap-2 border px-4 py-1 rounded-xl xl:items-center">
                                <svg className="w-20 text-[#9345d9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.1716 3C14.702 3 15.2107 3.21071 15.5858 3.58579L20.4142 8.41421C20.7893 8.78929 21 9.29799 21 9.82843V17H23V19L14.8738 19.0008C14.4295 20.7256 12.8636 22 11 22C9.13643 22 7.57052 20.7256 7.12621 19.0008L3 19C2.44772 19 2 18.5523 2 18V5C2 3.89543 2.89543 3 4 3H14.1716ZM11 16C9.89543 16 9 16.8954 9 18C9 19.1046 9.89543 20 11 20C12.1046 20 13 19.1046 13 18C13 16.8954 12.1046 16 11 16ZM14.1716 5H4V17L7.12595 17.0002C7.56991 15.2749 9.13607 14 11 14C12.8639 14 14.4301 15.2749 14.874 17.0002L19 17V9.82843L14.1716 5ZM14 7V13H6V7H14ZM12 9H8V11H12V9Z"></path></svg>

                                <div>
                                    <p className="text-lg font-semibold text-gray-800 my-2">Free delivery</p>
                                    <p>Orders over $99.00</p>
                                </div>
                            </div>

                            <div className="flex lg:flex-col xl:flex-row gap-2 border px-4 py-1 rounded-xl xl:items-center">
                                <svg className="w-20 text-[#9345d9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.3788 15.1057C20.9258 11.4421 19.5373 7.11431 16.0042 5.0745C13.4511 3.60046 10.4232 3.69365 8.03452 5.0556L7.04216 3.31879C10.028 1.61639 13.8128 1.4999 17.0042 3.34245C21.4949 5.93513 23.2139 11.4848 21.1217 16.112L22.4635 16.8867L18.2984 19.1008L18.1334 14.3867L19.3788 15.1057ZM4.62961 8.89968C3.08263 12.5633 4.47116 16.8911 8.00421 18.9309C10.5573 20.4049 13.5851 20.3118 15.9737 18.9499L16.9661 20.6867C13.9803 22.389 10.1956 22.5055 7.00421 20.663C2.51357 18.0703 0.794565 12.5206 2.88672 7.89342L1.54492 7.11873L5.70999 4.90463L5.87505 9.61873L4.62961 8.89968ZM8.50421 14.0027H14.0042C14.2804 14.0027 14.5042 13.7788 14.5042 13.5027C14.5042 13.2266 14.2804 13.0027 14.0042 13.0027H10.0042C8.6235 13.0027 7.50421 11.8834 7.50421 10.5027C7.50421 9.122 8.6235 8.00271 10.0042 8.00271H11.0042V7.00271H13.0042V8.00271H15.5042V10.0027H10.0042C9.72807 10.0027 9.50421 10.2266 9.50421 10.5027C9.50421 10.7788 9.72807 11.0027 10.0042 11.0027H14.0042C15.3849 11.0027 16.5042 12.122 16.5042 13.5027C16.5042 14.8834 15.3849 16.0027 14.0042 16.0027H13.0042V17.0027H11.0042V16.0027H8.50421V14.0027Z"></path></svg>

                                <div>
                                    <p className="text-lg font-semibold text-gray-800 my-2">Back gurantee</p>
                                    <p>Money back gurantee</p>
                                </div>
                            </div>

                            <div className="flex lg:flex-col xl:flex-row gap-2 border px-4 py-1 rounded-xl xl:items-center">
                                <svg className="w-20 text-[#9345d9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>

                                <div>
                                    <p className="text-lg font-semibold text-gray-800 my-2">Online support 24/7</p>
                                    <p>Delicated client support</p>
                                </div>
                            </div>

                            <div className="flex lg:flex-col xl:flex-row gap-2 border px-4 py-1 rounded-xl xl:items-center">
                                <svg className="w-20 text-[#9345d9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z"></path></svg>

                                <div>
                                    <p className="text-lg font-semibold text-gray-800 my-2">30 Days return</p>
                                    <p>if goods have problems</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default AboutUs;