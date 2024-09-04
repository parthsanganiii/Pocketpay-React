import React from 'react'
import Data from '../Data/Data'

const PrivacyPolicy = () => {
  return (
    <>
      <section className='flex items-center justify-center lg:px-14 py-[150px]'>
        <div className='container md:m-0 m-3'>
          <h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] wow animate__animated animate__bounceInLeft" data-aos="fade-down"
            data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">Privacy Policy</h1>
          <p class="text-[18px] font-medium text-[#181945] leading-[28px] opacity-60 mt-6 lg:w-[79%]"
            data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">Make
            payments in-store or online, plus send money to any bank account in a flash directly from your
            bank account.
          </p>
          <br />
          {Data.Policy.map(Detail => (
            <div>
              <h4 class="text-2xl font-bold text-[#181945] mt-6">{Detail.title}</h4>
              <br />
              <p class="lg:text-lg md:text-base text-sm text-[#181945] opacity-60 lg:px-6">
                {Detail.description}
              </p>
              <br />
            </div>
          ))}

        </div>
      </section>
    </>
  )
}

// const Details = [
//   {
//     title: "1. Introduction",
//     description: "Welcome to Pocketpay's Privacy Policy. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at Pocketpay"
//   },
//   {
//     title: "2. Information We Collect",
//     description: "We collect personal information that you provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us."
//   },
//   {
//     title: "3. How We Use Your Information",
//     description: "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations."
//   },
//   {
//     title: "4. Sharing Your Information",
//     description: "We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, and Vital Interests."
//   },
//   {
//     title: "5. Cookies and Other Tracking Technologies",
//     description: "We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy."
//   },
//   {
//     title: "6. Data Security",
//     description: " We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the services within a secure environment."
//   },
//   {
//     title: "7. Your Privacy Rights",
//     description: " We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the services within a secure environment."
//   },
//   {
//     title: "8. Changes to This Policy",
//     description: " IWe may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons."
//   },
//   {
//     title: "9. Contact Us",
//     description: "If you have questions or comments about this policy, you may contact us at Pocketpay"

//   },

// ]

export default PrivacyPolicy