import React from 'react'
import Data from '../Data/Data'

const Detail = () => {
    return (
        <>
            <section className='flex justify-center mt-[140px] pt-8 mb-12 lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3'>
                    <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] text-center"> Some Excellent Services
                        for you </h1>
                    <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 text-center">Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Magna sed in viverra egestas cras ultricies <br />
                        egestas quis in. Viverra nam phasellus aliquam nulla orci faucibus nulla. Elementum interdum interdum.
                    </p>

                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12 mt-12 '>
                        {Data.Services.map(Service => (
                            <div className='bg-[#E6F0FD] justify-center items-center flex flex-col rounded-2xl p-6 py-10 cursor-pointer hover:shadow-lg'>
                                <img src={Service.img} />
                                <h4 class="text-2xl font-bold text-[#383940] mt-6 text-center">{Service.title}</h4>
                                <p class="text-base font-medium text-[#181945] opacity-60 mt-4 leading-7 text-center">{Service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

// const Services = [
//     {
//         img: "img/bill-payment.svg",
//         title: "Bill Payment",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     },
//     {
//         img: "img/whitdraw.svg",
//         title: "withdraw Money",
//         description: "Aliquet nam viverra quam lectus grae pretium cursus."
//     },
//     {
//         img: "img/add-card.svg",
//         title: "Add Card",
//         description: "Ultrices adipiscing metus at vel cras Torto rhoncus tellus"
//     },
//     {
//         img: "img/history.svg",
//         title: "History",
//         description: "Pretium cursus. Urna sem tincidunt pretium varius id."
//     },
//     {
//         img: "img/dual-currency.svg",
//         title: "Dual Currency",
//         description: "Morbi varius integer quisque quam lectus gravida."
//     },
//     {
//         img: "img/e-commarce.svg",
//         title: "E-Commerce",
//         description: "Morbi varius integer quisque quam lectus gravida."
//     },
//     {
//         img: "img/bank.svg",
//         title: "Bank",
//         description: "consectetur adipiscing elit sit amet, consectetur."
//     },
//     {
//         img: "img/history.svg",
//         title: "History",
//         description: "Pretium cursus. Urna sem tincidunt pretium varius id."
//     },

// ]

export default Detail