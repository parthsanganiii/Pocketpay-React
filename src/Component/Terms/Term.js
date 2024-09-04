import React from 'react'
import Data from '../Data/Data'

const Term = () => {
    return (
        <>
            <section className='flex items-center justify-center lg:px-14 py-[150px]'>
                <div className='container md:m-0 m-3'>
                    <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] wow animate__animated animate__bounceInLeft"
                        data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                        Terms and Conditions</h1>
                    <p class="lg:text-lg md:text-base text-sm mt-6 text-[#181945] opacity-60" data-aos="fade-right"
                        data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">Your use of our website
                        is governed by the
                        following terms and conditions (“Terms of Use”), as well as the CARDONE CAPITAL Privacy Policy and other
                        operating rules, minimum qualifications and cautions posted throughout the website or presented to you
                        individually during the course of your use of the website (collectively, the “Terms”). The Terms govern
                        your use of the website and CARDONE CAPITAL reserves the right to update or replace the Terms any time
                        without notice. You are advised to review the Terms for any changes when you visit the website even if
                        you have not received a notification of changes as you are bound by them even if you have not reviewed
                        them. Your viewing and use of the website after such change constitutes your acceptance of the Terms and
                        any changes to such terms. If at any time you do not want to be bound by the Terms you should logout,
                        exit and cease using the website immediately.
                    </p>
                    <br />


                    {Data.Conditions.map((Detail, index) => (
                        <div key={index}>
                            <h4 className="text-2xl font-bold text-[#181945] mt-6">{Detail.title}</h4>
                            <br />
                            {Array.isArray(Detail.points) && Detail.points.length > 0 ? (
                                Detail.points.map((point, i) => (
                                    <>
                                        <p key={i} className="lg:text-lg md:text-base text-sm text-[#181945] opacity-60 ">
                                            {point}
                                        </p>
                                        <br />
                                    </>
                                ))
                            ) : (
                                <p className="lg:text-lg md:text-base text-sm text-[#181945] opacity-60 lg:px-6">
                                    No points available.
                                </p>
                            )}
                            <br />
                        </div>
                    ))}


                </div>
            </section>
        </>
    )
}

// const Details = [
//     {
//         title: "Intended Use of Website",
//         points: [
//             "CARDONE CAPITAL is not a broker-dealer or placement agent. At no time does CARDONE CAPITAL offer, broker, advise, purchase, sell or otherwise transact in securities regulated by the SEC or federal or state law. CARDONE CAPITAL does not accept, hold or transfer cash or securities. CARDONE CAPITAL does not guarantee that a Company seeking investment will achieve any level of success or that any proposed offering will qualify under applicable federal and state securities laws.",
//             "CARDONE CAPITAL is not a personal financial advisor. CARDONE CAPITAL, whether through the website or otherwise, does not provide personal financial advice, loans or credit, banking, consumer credit ratings, credit decisions, financial products, brokerage accounts, insurance, tax advice, legal advice, or financial or legal services of any kind.",
//             "CARDONE CAPITAL does not guarantee any results to anyone. All users of the website are responsible for making their own decisions to use the website and for any activity taken on the website, including without limitation registering and making an investment or otherwise."
//         ]
//     },
//     {
//         title: "User Registration",
//         points: [

//             "If you are accepting the Terms on behalf of an organization or entity, rather than in an individual capacity, you represent and warrant that you are authorized to accept the Terms on that organization or entity’s behalf and bind them to these Terms (in which case, the references to “you” and “your” in these Terms, except for in this sentence, refer to that organization or entity).",
//             "Only real persons at or above the age of 18 may register for an account and use the website. Registering for an account on the website creates no commitment or obligation on the registered user to make any investment or seek any investment. All information you provide to the website must be truthful, accurate and complete in all material respects. Our registration process may use third-party validation technology, including those provided by third-party social media sites, to attempt to confirm your qualification to use the website.",
//             "CARDONE CAPITAL may reject any application to register an individual or an organization or entity for failure to achieve validation through available methods or otherwise meet CARDONE CAPITAL’s registration requirements."
//         ]
//     },
//     {
//         title: "Registered Account Obligations",
//         points: [
//             "The named registered user of an account is the only person that may use the account and it may not be transferred to anyone else.",
//             "You are responsible for maintaining the confidentiality of your username and password and to periodically change your password to maintain security. If you have concerns that your username or password may have been compromised and suspect that unauthorized access to your account or the website has occurred, you must immediately contact CARDONE CAPITAL’s investor support through a secure method (which may not be through your website account)."
//         ]
//     },
//     {
//         title: "Content Use Limitations",
//         points: [
//             "Your use of the website and its videos, webinars, images, infographics, alerts, text, articles, assessments, checklists, forms, ratings, design, data, source code, analytics, photos, software, trademarks, copyrights, and other information (“Content”) may only be used for the lawful and intended purposes expressly authorized by CARDONE CAPITAL. If you access this website from outside the United States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction, as well as any restrictions that you may be subject to by a department of the United States government. Any misuse or unauthorized use of the website and its Content, or other violations of the Terms may violate Applicable Law (see below), including without limitation SEC regulations and applicable state securities laws, copyright laws (including the Digital Millennium Copyright Act), trademark laws, the laws of privacy, laws of publicity, identity theft and communications statutes and regulations, in which case CARDONE CAPITAL is authorized to terminate your account and access to the website at any time and without notice and report you to the appropriate authorities and other interested parties.",
//             "CARDONE CAPITAL is not a personal financial advisor. CARDONE CAPITAL, whether through the website or otherwise, does not provide personal financial advice, loans or credit, banking, consumer credit ratings, credit decisions, financial products, brokerage accounts, insurance, tax advice, legal advice, or financial or legal services of any kind.",
//             "CARDONE CAPITAL does not guarantee any results to anyone. All users of the website are responsible for making their own decisions to use the website and for any activity taken on the website, including without limitation registering and making an investment or otherwise."
//         ]
//     },
//     {
//         title: "Prospective Investor Accounts",
//         points: [
//             "Any person or entity that is considering making an investment with a Company that posts its fundraising plans on the website, or, after the fundraising plan becomes a qualified offering, makes an investment, does so at his or her own risk. All investment carries risk that you may lose some or all of your investment. No Content on the website is a replacement for performing your own due diligence, exercising good judgement, and seeking financial, investment, tax or legal advice from qualified and licensed professionals with knowledge of your personal circumstances. Any registered financial, legal or tax representatives or firm working for or with CARDONE CAPITAL or communicating with you or users in general through the website are not your personal advisors and do not have knowledge about your personal circumstances and anything they post is for informational purposes only and may not be accurate to your situation and you agree that you shall not rely on Content on the website in making personal decisions about an investment or the potential legal, tax or financial consequences of such investment. You are encouraged to seek personal professional advice from qualified and licensed professionals.",
//             "You are solely responsible for your investment decisions. While you may be asked about your identity, individual financial circumstance and investment experience and sophistication during your engagement with the website, CARDONE CAPITAL and its advisors and vendors are not responsible to verify the veracity of the information that you provide, even if you certify to its truth or undergo a suitability review. Whether you are an “Accredited Investor”, as such is defined under securities law, or a non-accredited investor, or an institutional investor, CARDONE CAPITAL and the Companies seeking investment are relying on your representations with respect to your investment experience, your financial status and your eligibility to invest. You may, further, be held personally liable for your fraud, negligence and other bad acts that may result from any false representations you make."
//         ]
//     }
// ]

export default Term