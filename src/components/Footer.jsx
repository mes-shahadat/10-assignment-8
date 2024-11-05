
function Footer () {

    return (
        <>
            <footer className="bg-white py-10 md:py-20">

                <section className="w-11/12 md:w-9/12 mx-auto md:text-center space-y-6">
                    <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                    <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
                    <hr />

                    <div className="flex max-sm:flex-col justify-evenly gap-8">
                        <div>
                            <h3 className="font-bold mb-2">Services</h3>
                            <ul className=" text-gray-600 text-sm space-y-2">
                                <li>Product Support</li>
                                <li>Order Tracking</li>
                                <li>Shipping & Delivery Returns</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold mb-2">Company</h3>
                            <ul className=" text-gray-600 text-sm space-y-2">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-bold mb-2">Legal</h3>
                            <ul className=" text-gray-600 text-sm space-y-2">
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>

                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;