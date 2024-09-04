import React from 'react'
import Data from '../Data/Data'

const WhyPocketpay = () => {
    return (
        <>
            <section className='flex justify-center py-[80px] bg-[#E6F0FD] lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3'>
                    <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945]">Why Pocketpay?</h1>
                    <p class="text-lg font-medium mt-4 text-[#181945] opacity-60">We are obsessed with
                        technology and use it
                        extensively to solve the payments needs of your business.
                    </p>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-9'>
                        {Data.Deatils.map(Detail => (
                            <div class="bg-white rounded-2xl p-6 ">
                                <img src={Detail.img} alt=""/>
                                    <h4 class="text-2xl font-semibold text-[#383940] mt-6">{Detail.title}</h4>
                                    <p
                                        class="text-sm font-medium text-[#181945] opacity-60 lg:w-[80%] md:w-[85%] w-[90%] mt-4 leading-7 ">
                                        {Detail.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

// const Deatils = [
//     {
//         img: "img/flexible.svg",
//         title: "Flexible",
//         description: "Multiple feature launches, optimizations and improvements through the year to ensure you are always ahead of the curve"
//     },
//     {
//         img: "img/comprehensive.svg",
//         title: "Comprehensive",
//         description: "Reduce your operational expenses using our fully managed platform that is designed for Security, Reliability and Scale"
//     },
//     {
//         img: "img/shield.svg",
//         title: "Lorem Ipsum",
//         description: "Reduce your operational expenses using our fully managed platform that is designed for Security, Reliability and Scale"
//     },
//     {
//         img: "img/copy.svg",
//         title: "Lorem Ipsum",
//         description: "Reduce your operational expenses using our fully managed platform that is designed for Security, Reliability and Scale"
//     }
// ]


export default WhyPocketpay