
function ContactUs() {

    return (
        <>
            <section className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-5 my-10">
                <div className="space-y-5">
                    <h2 className="text-xl font-bold">Address information</h2>
                    <p className="text-gray-800">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>

                    <figure>
                        <figcaption className="text-lg font-semibold mb-3">We are located at:</figcaption>
                        <ul className="text-gray-600 space-y-2 text-sm">
                            <li>Gadget Heaven in twin tower.  Dhaka, Bangladesh</li>
                            <li>Open from 9 AM to 6 PM, Monday to Friday</li>
                            <li>Email at company@gmail.com</li>
                            <li>Call on 019XXXXXXXX</li>
                        </ul>
                    </figure>

                </div>

                <div className="space-y-5">
                    <h2 className="text-xl font-bold">Inform Us</h2>
                    <p className="text-gray-800">Fill out the form and we'll get back soon via email. We look forward to assisting you!</p>

                    <form className="grid gap-4">
                        <input className="p-4 border rounded-lg" type="text" placeholder="Your Name"/>
                        <input className="p-4 border rounded-lg" type="email" placeholder="Your Email"/>
                        <textarea className="p-4 border rounded-lg h-40" placeholder="Message"></textarea>
                        <input className="bg-[#9345d9] text-white w-max p-4 border rounded-lg cursor-pointer font-semibold" type="button" value="Send Message" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactUs;