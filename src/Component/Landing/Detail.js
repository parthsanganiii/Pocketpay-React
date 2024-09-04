import React from 'react'
import Data from '../Data/Data'

const Detail = () => {
    return (
        <>
            <section className='flex justify-center py-[80px] lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3 grid md:grid-cols-2 items-center'>
                    {Data.Appointments.map(Text => (
                        <div>
                            <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] lg:w-[50%] md:w-[50%]">{Text.title}</h1>
                            <p class="text-lg font-medium mt-4 text-[#181945] opacity-60">{Text.description}
                            </p>
                            <button
                                class="flex items-center bg-[#0666EB] max-w-max mt-9 py-3 px-4 rounded-full hover:bg-[#1A78F0]">
                                <p class="text-white text-sm font-semibold ">Learn More</p>
                                <img src="img/arrow-narrow-right.svg" alt="" />
                            </button>
                        </div>
                    ))}

                    {Data.Appointments.map(Img => (
                        <div>
                            <img src={Img.img} alt="" class="w-full h-full" />
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex items-center justify-center lg:px-14 md:px-3 my-[80px]'>
                <div className='container bg-[#F8E6DE] rounded-[36px] grid lg:grid-cols-2 grid-cols-1 gap-6 overflow-hidden items-center md:m-0 m-3 md:px-[60px] md:py-[60px] px-[20px] py-[20px]'>
                    {Data.Transactions.map(Img => (
                        <div>
                            <img src={Img.img} alt="" class="w-full h-full" />
                        </div>
                    ))}
                    {Data.Transactions.map(Text => (
                        <div>
                            <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] lg:w-[70%]">{Text.title}</h1>
                            <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 lg:w-[79%]">{Text.description}</p>

                            <p class="text-[18px] font-normal text-[#858799] mt-7">Download Our App Now!</p>
                            <div class="flex gap-3 mt-2">
                                <img src="img/playstore.png" alt="" class="sm:w-[160px] sm:h-[48px] w-[45%] cursor-pointer" />
                                <img src="img/appstore.png" alt="" class="sm:w-[160px] sm:h-[48px] w-[45%] cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex justify-center py-[80px] lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3 grid md:grid-cols-2 items-center'>
                    {Data.Bill_payments.map(Img => (
                        <div>
                            <img src={Img.img} alt="" class="w-full h-full"></img>
                        </div>
                    ))}
                    {Data.Bill_payments.map(Text => (
                        <div>
                            <h1 className='lg:text-5xl md:text-4xl text-3xl text-[#181945] font-bold lg:w-[70%]'>{Text.title}</h1>
                            <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 lg:w-[79%]">{Text.description}</p>
                            {Array.isArray(Text.points) && Text.points.length > 0 ? (
                                Text.points.map((point, i) => (
                                    <>
                                        <div className='flex items-center gap-1 mt-3'>
                                            <img src="img/green-check.svg" alt="" />
                                            <p key={i} className="lg:text-lg md:text-base text-sm text-[#181945] opacity-60 ">
                                                {point}
                                            </p>
                                        </div>
                                    </>
                                ))
                            ) : (
                                <p className="lg:text-lg md:text-base text-sm text-[#181945] opacity-60 lg:px-6">
                                    No points available.
                                </p>
                            )}
                            <button
                                class="flex items-center bg-[#0666EB] max-w-max mt-9 py-3 px-4 rounded-full hover:bg-[#1A78F0]">
                                <p class="text-white text-sm font-semibold ">Learn More</p>
                                <img src="img/arrow-narrow-right.svg" alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

// const Appointments = [
//     {
//         title: "Appointments made easy.",
//         description: "Streamline your schedule with our user-friendly app, making appointments effortlessly accessible and hassle-free. Enjoy the convenience of seamless booking and efficient management for a stress-free experience.",
//         img: "img/appointment.png"
//     }
// ]

// const Transactions = [
//     {
//         title: "In-store transactions empowered by Pocketpay",
//         description: "Millions of small & big businesses use Pocketpay to accept payments anywhere any time with a wide range of solutions for all kind of merchants",
//         img: "img/scan.png"
//     }
// ]


// const Bill_payments = [
//     {
//         img: "img/Vector (2).png",
//         title: "Recharges & Bill Payments",
//         description: "Lightning fast payments, exciting rewards and seamless transactions on every recharge & bill payment.",
//         points:
//             [
//                 "Unlock easy, exciting deals",
//                 "No hidden charges",
//                 "Win gifts and vouchers"
//             ]

//     }
// ]


export default Detail;