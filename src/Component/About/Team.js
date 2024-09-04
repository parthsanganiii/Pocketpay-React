import React from 'react'
import Data from '../Data/Data'

const Team = () => {
    return (
        <>
            <section className='bg-[#E6F0FD] flex justify-center py-16 lg:px-14 md:px-3'>
                <div className='container md:m-0 m-3'>
                    <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] mb-8">Meet the Team</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                        {Data.Members.map(Member => (
                            <div className='bg-white rounded-2xl p-6'>
                                <img src={Member.img} alt="Team Member" class="rounded-full w-32 h-32 mx-auto" />
                                <h4 class="text-xl font-semibold text-[#383940] mt-6 text-center">{Member.name}</h4>
                                <p class="text-sm font-medium text-[#181945] opacity-60 text-center">{Member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

// const Members = [
//     {
//         img: "img/user.webp",
//         name: "John Doe",
//         designation: "CEO & Founder"
//     },
//     {
//         img: "img/user.webp",
//         name: "Jane Smith",
//         designation: "CTO"
//     },
//     {
//         img: "img/user.webp",
//         name: "Emily Johnson",
//         designation: "CFO"
//     }
// ]

export default Team