import React, { useState } from "react";
import Data from "../Data/Data";

// const faqs = [
//     {
//         question: "Are there really zero fees?",
//         answer:
//             "At Pocketpay, we believe businesses shouldn't have to wait or pay to access money they've already earned. We don't charge you to sign up. We don't charge you when you receive payments. And we don't charge you when you make payments. There are zero fees. Seriously.",
//     },
//     {
//         question: "Is Pocketpay secure?",
//         answer:
//             "At Pocketpay, we believe businesses shouldn't have to wait or pay to access money they've already earned. We don't charge you to sign up. We don't charge you when you receive payments. And we don't charge you when you make payments. There are zero fees. Seriously.",
//     },
//     {
//         question: "Does Pocketpay replace my accounting software?",
//         answer:
//             "At Pocketpay, we believe businesses shouldn't have to wait or pay to access money they've already earned. We don't charge you to sign up. We don't charge you when you receive payments. And we don't charge you when you make payments. There are zero fees. Seriously.",
//     },
//     {
//         question: "Is Pocketpay a bank?",
//         answer:
//             "At Pocketpay, we believe businesses shouldn't have to wait or pay to access money they've already earned. We don't charge you to sign up. We don't charge you when you receive payments. And we don't charge you when you make payments. There are zero fees. Seriously.",
//     },
//     {
//         question: "Are the payments really instant?",
//         answer:
//             "At Pocketpay, we believe businesses shouldn't have to wait or pay to access money they've already earned. We don't charge you to sign up. We don't charge you when you receive payments. And we don't charge you when you make payments. There are zero fees. Seriously.",
//     },
//     {
//         question: "Do my clients and vendors have to sign up for Pocketpay too?",
//         answer:
//             "At Pocketpay, we believe businesses shouldn't have to wait or pay to access money they've already earned. We don't charge you to sign up. We don't charge you when you receive payments. And we don't charge you when you make payments. There are zero fees. Seriously.",
//     },
// ];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section id="faq" className="flex justify-center py-[100px] lg:px-14 md:px-3">
            <div className="container md:m-0 m-3">
                <h1 className="lg:text-5xl md:text-4xl text-3xl text-[#181945] font-bold mb-14">
                    Frequently Asked Questions
                </h1>
                {Data.faqs.map((faq, index) => (
                    <div key={index} className="lg:mt-8 md:mt-7 mt-6">
                        <button
                            className="w-full text-left lg:text-2xl md:text-xl text-lg font-bold text-[#3B3E44] flex justify-between items-center py-2 border-b"
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.question}
                            <div className="h-8 w-8 bg-[#0666EB] flex justify-center transform transition-transform rounded-full text-white">
                                <span id={`icon-${index}`} className="">
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </div>
                        </button>
                        <div id={`answer-${index}`} className={activeIndex === index ? "block" : "hidden"}>
                            <p className="lg:text-lg md:text-base text-sm font-medium text-[#181945] opacity-60 lg:w-[70%] md:w-[80%] w-[90%] mt-2">
                                {faq.answer}
                            </p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
