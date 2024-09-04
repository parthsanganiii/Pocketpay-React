import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section id="footer" class="flex justify-center sm:pt-[100px] pt-8 bg-[#032B63] sm:pb-[40px] lg:px-14 md:px-3">
                <div class="container md:m-0 m-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                    <div>
                        <img src="img/logo-w.svg" alt="" />
                        <p class="text-base font-normal mt-6 text-white leading-6 w-[70%]">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                        <div id="icons" class="grid grid-cols-7 gap-5 mt-9">
                            <Link to="#"><img src="img/insta.svg" alt="" /></Link>
                            <Link to="#"><img src="img/x.svg" alt="" /></Link>
                            <Link to="#"><img src="img/fb.svg" alt="" /></Link>
                            <Link to="#"><img src="img/youtube.svg" alt="" /></Link>
                        </div>

                    </div>
                    <div class="text-white sm:mt-0 mt-6">
                        <h4 class="text-[22px] font-bold">Jump To</h4>
                        <Link to="/">
                            <p class="text-base font-normal mt-6">Home</p>
                        </Link>
                        <Link to="/services">
                            <p class="text-base font-normal mt-3">Services</p>
                        </Link>
                        <Link to="/pricing">
                            <p class="text-base font-normal mt-3">Pricing</p>
                        </Link>
                        <Link to="/about">
                            <p class="text-base font-normal mt-3">About us</p>
                        </Link>
                        <Link to="/contact">
                            <p class="text-base font-normal mt-3">Contact</p>
                        </Link>
                    </div>
                    <div class="text-white sm:mt-0 mt-6">
                        <h4 class="text-[22px] font-bold">Legal</h4>
                        <Link to="/privacyPolicy">
                            <p class="text-base font-normal mt-6">Privacy Policy</p>
                        </Link>
                        <Link to="/terms">
                            <p class="text-base font-normal mt-3">Terms of Use</p>
                        </Link>
                        <Link to="/blog">
                            <p class="text-base font-normal mt-3">Blog</p>
                        </Link>
                    </div>
                    <div class="text-white sm:mt-0 mt-6">
                        <h4 class="text-[22px] font-bold">Contact Us</h4>

                        <div class="flex gap-4 mt-6">
                            <img src="img/map-pin.svg" alt="" />
                            <p class="text-base font-normal">1234, South Avenue</p>
                        </div>
                        <div class="flex gap-4 mt-3">
                            <img src="img/phone-call.svg" alt="" />
                            <p class="text-base font-normal">+01234 567 890</p>
                        </div>
                        <p class="flex gap-4 mt-6">Download Our App Now!</p>
                        <div class="flex gap-3 mt-2">
                            <img src="img/playstore.png" alt="" class="lg:w-[112px] md:w-[80px] w-[90px]" />
                            <img src="img/appstore.png" alt="" class="lg:w-[112px] md:w-[80px] w-[90px]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer