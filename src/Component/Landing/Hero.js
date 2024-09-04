import React from 'react'
import Data from '../Data/Data'

const Hero = () => {
    return (
        <>
            <section className='flex justify-center pt-[150px] pb-[80px]  bg-[#E6F0FD] md:px-14'>
                <div className='container bg-white rounded-[36px] grid md:grid-cols-2 grid-cols-1 sm:p-14 p-5 sm:mx-0 mx-3 items-center gap-5'>
                    {Data.Main.map((Text, index) => (
                        <div key={index}>
                            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] lg:w-[70%]">{Text.title}</h1>
                            <p className="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 lg:w-[79%]">{Text.description}</p>
                            {Array.isArray(Text.points) && Text.points.length > 0 ? (
                                Text.points.map((point, i) => (
                                    <div key={i} className='flex items-center gap-1 mt-3'>
                                        <img src="img/green-check.svg" alt="" />
                                        <p className="lg:text-lg md:text-base text-sm text-[#181945] opacity-60">
                                            {point}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="lg:text-lg md:text-base text-sm text-[#181945] opacity-60 lg:px-6">
                                    No points available.
                                </p>
                            )}
                            <p className="text-[18px] font-normal text-[#858799] mt-7">
                                Download Our App Now!
                            </p>
                            <div className="flex gap-3 mt-2">
                                <img src="img/playstore.png" alt="" className="sm:w-[160px] sm:h-[48px] w-[45%] cursor-pointer" />
                                <img src="img/appstore.png" alt="" className="sm:w-[160px] sm:h-[48px] w-[45%] cursor-pointer" />
                            </div>
                        </div>
                    ))}
                    {Data.Main.map((img, index) => (
                        <div key={index}>
                            <img src={img.img} alt="" className="w-full h-full" />
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex justify-center bg-[#E6F0FD] md:px-14 py-[80px]'>
                <div className='container sm:mx-0 mx-3 items-center'>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945]">Recharges & Bill Payments</h1>
                    <p className="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6">
                        Enjoy fast payments on every recharge & bill payment
                    </p>
                    <div className='grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                        {Data.Recharges.map(Recharge => (
                            <div className='flex flex-col justify-center items-center py-6 bg-white rounded-2xl'>
                                <img src={Recharge.img} alt="" class="" />
                                <p class="text-sm font-semibold mt-6">{Recharge.title}</p>
                            </div>
                        ))}
                    </div >
                    <button
                        class="flex items-center bg-[#0666EB] max-w-max mx-auto mt-9 py-3 px-4 rounded-full hover:bg-[#1A78F0]">
                        <p class="text-white text-sm font-semibold ">View All</p>
                        <img src="img/arrow-narrow-right.svg" alt="" />
                    </button>
                </div >
            </section >
        </>
    )
}


// const Main = [
//     {
//         title: "Quick, Easy, and Safe Payments",
//         description: "Make payments in-store or online, plus send money to any bank account in a flash directly from your bank account.",
//         points:
//             [
//                 "Swift QR scanning for instant payments at lightspeed",
//                 "24/7 money transfers to anyone, anytime",
//                 "100% safe & secure"
//             ],
//         img: "img/hero-img.png"
//     }
// ]


// const Recharges = [
//     {
//         img: "img/mobile.svg",
//         title: "Mobile Recharge"
//     },
//     {
//         img: "img/bulb.svg",
//         title: "Electricity Bill"
//     },
//     {
//         img: "img/DTH Recharge.svg",
//         title: "DTH Recharge"
//     },
//     {
//         img: "img/mobile.svg",
//         title: "Mobile Postpaid"
//     },
//     {
//         img: "img/FASTag.svg",
//         title: "FASTag"
//     },
//     {
//         img: "img/Buy Insurance.svg",
//         title: "Buy Insurance"
//     },
//     {
//         img: "img/Investment.svg",
//         title: "Investment"
//     },
// ]

export default Hero;


