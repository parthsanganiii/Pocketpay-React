import React from 'react'
import Data from '../Data/Data'

const AboutPocketpay = () => {
    return (
        <>
            <section className='flex items-center justify-center pt-[150px] pb-16 lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3'>
                    <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] text-center"> About Us </h1>
                    <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 text-center">Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Magna sed in viverra egestas cras ultricies <br />
                        egestas quis in. Viverra nam phasellus aliquam nulla orci faucibus nulla. Elementum interdum interdum.
                    </p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center mt-16'>
                        {Data.WhatisPocket.map(Text => (
                            <div>
                                <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945]">{Text.title}</h1>
                                <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6">{Text.description}</p>
                            </div>
                        ))}
                        {Data.WhatisPocket.map(Img => (
                            <div>
                                <img src={Img.img} alt="About Pocketpay" class="w-full h-full rounded-xl" />

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='flex justify-center py-16 lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3 grid lg:grid-cols-2 gap-6 items-center'>
                    {Data.OurMission.map(Img => (
                        <div>
                            <img src={Img.img} alt="Our Mission" class="w-full h-full rounded-xl" />
                        </div>
                    ))}
                    {Data.OurMission.map(Text => (
                        <div>
                            <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945]">{Text.title}</h1>
                            <p class="text-lg font-medium mt-4 text-[#181945] opacity-60">{Text.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

// const WhatisPocket = [
//     {
//         title: "What is Pocketpay",
//         description: "Pocketpay is committed to revolutionizing the way you handle your payments. With a focus on convenience, security, and innovation, we offer a range of services that make transactions faster and easier.",
//         img: "img/about.jpeg"
//     }
// ]

// const OurMission = [
//     {
//         title: "Our Mission",
//         description: "At Pocketpay, our mission is to empower businesses and individuals with the tools they need to succeed in the digital economy. We strive to make financial transactions seamless, secure, and accessible to everyone, everywhere.",
//         img: "img/ourMisson.jpeg"
//     }
// ]


export default AboutPocketpay