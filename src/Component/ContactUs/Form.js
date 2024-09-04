import React from 'react'

const Form = () => {
    return (
        <>
            <section id="contact" class="flex justify-center py-[150px] bg-white lg:px-14 md:px-3">
                <div class="container md:m-0 m-3 ">
                    <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] text-center"> Contact Us </h1>
                    <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 text-center">Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Magna sed in viverra egestas cras ultricies <br />
                        egestas quis in. Viverra nam phasellus aliquam nulla orci faucibus nulla. Elementum interdum interdum.
                    </p>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-16'>
                        <div class="">
                            <img src="img/contact-flip.png" alt="" class="w-full h-full" />
                        </div>
                        <div class="">
                            <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] w-[80%]">Connect With Our Sales
                                Team.</h1>
                            <p class="text-lg font-medium mt-4 text-[#181945] opacity-60">Our sales team always
                                active to
                                support you. Any kind of questions about to our product they can answer to you.
                            </p>
                            <form action="#" class="mt-14">
                                <div class="grid sm:grid-cols-2 grid-cols-1 gap-8">
                                    <input type="text" placeholder="First Name"
                                        class="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500" />
                                    <input type="text" placeholder="Last Name"
                                        class="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500" />
                                </div>
                                <div class="grid sm:grid-cols-2 grid-cols-1 gap-8 my-8">
                                    <input type="text" placeholder="Email Address"
                                        class="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500" />
                                    <input type="text" placeholder="Phone"
                                        class="sm:p-4 p-2 rounded-md border hover:border-[#0666EB] focus:outline-none focus:border-blue-500" />
                                </div>
                                <textarea id="message" name="message" rows="4" placeholder="Your Text"
                                    class="w-full border border-gray-200 p-3 rounded-lg mt-1 hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
                                    required></textarea>
                                <label class="inline-flex items-center gap-3 mt-8">
                                    <input type="checkbox" class="form-checkbox h-5 w-5 opacity-40 border-none" />
                                    <span class="text-[#8C94A3] text-lg font-normal w-[80%] ">I agree that braintree may contact me
                                        at the email address or
                                        phone number above.</span>
                                </label>
                                <button
                                    class="bg-[#0666EB] px-[16px] py-[9px] text-white rounded-full w-full text-lg font-semibold mt-8">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Form