import React, { useEffect } from 'react';

const Contact = () => {
    return (
        <section id="contact" className="flex justify-center py-[80px] bg-[#E6F0FD] lg:px-14 md:px-3">
            <div className="container md:m-0 m-3 grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                    <h1
                        className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] w-[80%]"
                    >
                        Connect With Our Sales Team.
                    </h1>
                    <p
                        className="text-lg font-medium mt-4 text-[#181945] opacity-60"
                    >
                        Our sales team is always active to support you. Any kind of questions about our product they can answer for you.
                    </p>
                    <form action="#" className="mt-14 wow animate__animated animate__zoomIn" data-aos="zoom-in">
                        <div
                            className="grid sm:grid-cols-2 grid-cols-1 gap-8"
                            
                        >
                            <input
                                type="text"
                                placeholder="First Name"
                                className="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div
                            className="grid sm:grid-cols-2 grid-cols-1 gap-8 my-8"
                            
                        >
                            <input
                                type="text"
                                placeholder="Email Address"
                                className="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Your Text"
                            
                            className="w-full border border-white p-3 rounded-lg mt-1 hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
                            required
                        ></textarea>
                        <label
                            className="inline-flex items-center gap-3 mt-8"
                        >
                            <input type="checkbox" className="form-checkbox h-5 w-5 opacity-40 border-none" />
                            <span className="text-[#8C94A3] text-lg font-normal w-[80%]">
                                I agree that Braintree may contact me at the email address or phone number above.
                            </span>
                        </label>
                        <button
                            className="bg-[#0666EB] hover:bg-[#1A78F0] px-[16px] py-[9px] text-white rounded-full w-full text-lg font-semibold mt-8"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div
                    className=""
                >
                    <img src="img/contact.png" alt="Contact Us" className="w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
