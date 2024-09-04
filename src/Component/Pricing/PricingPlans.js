import React from 'react'
import Data from '../Data/Data'

const PricingPlans = () => {
    return (
        <>
            <section className='flex justify-center pt-[150px] lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3'>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] text-center">Affordable Pricing Plans</h1>
                    <p className="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id arcu,
                        convallis est sed. Proin nulla eu a vitae lectus leo suscipit.
                    </p>
                    <div className='grid md:grid-cols-3 grid-cols-1 my-16 gap-10'>
                        {Data.Plans.map(Plan => (
                            <div key={Plan.id} className={`rounded-3xl shadow-lg p-10 cursor-pointer hover:shadow-lg ${Plan.cardColor}`}>
                                <div className='flex gap-5'>
                                    <div>
                                        <img src={Plan.img} />
                                    </div>
                                    <div>
                                        <p className={`text-[18px] font-medium leading-[28px] ${Plan.textColor} ${Plan.cardColor === "bg-white" ? "opacity-60" : ""}`}>{Plan.userType}</p>
                                        <h4 className={`text-2xl font-bold mt-1 ${Plan.textColor}`}>{Plan.planName}</h4>
                                    </div>
                                </div>
                                <p className={`text-[18px] font-medium leading-[28px] mt-5 ${Plan.textColor} ${Plan.cardColor === "bg-white" ? "opacity-60" : ""}`}>
                                    {Plan.description}
                                </p>
                                <h1 className={`lg:text-5xl md:text-4xl text-3xl font-bold mt-7 ${Plan.textColor}`}>{Plan.price} <span className={`text-[18px] font-medium leading-[28px] ${Plan.cardColor === "bg-white" ? "opacity-60" : ""}`}>{Plan.priceInfo}</span></h1>
                                <p className={`text-[18px] font-extrabold leading-[28px] mt-5 ${Plan.textColor} ${Plan.cardColor === "bg-white" ? "opacity-60" : ""}`}>
                                    What’s included
                                </p>
                                {Plan.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 mt-5">
                                        <img src={Plan.cardColor === "bg-white" ? "img/Check Circle.svg" : "img/whiteCheck Circle.svg"} alt="Check" />
                                        <p className={`text-[18px] font-medium leading-[28px] ${Plan.textColor} ${Plan.cardColor === "bg-white" ? "opacity-60" : ""}`}>{feature}</p>
                                    </div>
                                ))}
                                <button
                                    className={`items-center ${Plan.buttonColor} ${Plan.buttonTextColor} text-base font-semibold mx-auto mt-9 py-4 px-9 rounded-full ${Plan.buttonColor === "bg-[#0666EB]" ? "hover:bg-[#1A78F0]" : "hover:shadow-gray-700"} `}>
                                    Get started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

// const Plans = [
//     {
//         id: 1,
//         img: "img/basic.svg",
//         userType: "For individuals",
//         planName: "Basic",
//         description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
//         price: "$99",
//         priceInfo: "/monthly",
//         features: [
//             "All analytics features",
//             "Up to 250,000 tracked visits",
//             "Normal Support",
//             "Up to 3 team members"
//         ],
//         buttonColor: "bg-[#0666EB]",
//         buttonTextColor: "text-white",
//         cardColor: "bg-white",
//         textColor: "text-[#181945]"
//     },
//     {
//         id: 2,
//         img: "img/pro.svg",
//         userType: "For startups",
//         planName: "Pro",
//         description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
//         price: "$199",
//         priceInfo: "/monthly",
//         features: [
//             "All analytics features",
//             "Up to 1,000,000 tracked visits",
//             "Premium support",
//             "Up to 10 team members"
//         ],
//         buttonColor: "bg-white",
//         buttonTextColor: "text-[#181945]",
//         cardColor: "bg-[#181945]",
//         textColor: "text-white"
//     },
//     {
//         id: 3,
//         img: "img/enterprise.svg",
//         userType: "For big companies",
//         planName: "Enterprise",
//         description: "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
//         price: "$399",
//         priceInfo: "/monthly",
//         features: [
//             "All analytics features",
//             "Up to 5,000,000 tracked visits",
//             "Dedicated support",
//             "Up to 50 team members"
//         ],
//         buttonColor: "bg-[#0666EB]",
//         buttonTextColor: "text-white",
//         cardColor: "bg-white",
//         textColor: "text-[#181945]"
//     }
// ]

export default PricingPlans