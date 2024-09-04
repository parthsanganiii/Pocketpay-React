import React from 'react'

const contact = () => {
	return (
		<>
			<section id="contact" class="flex justify-center py-[100px] lg:px-14 md:px-3">
				<div class="container md:m-0 m-3 grid md:grid-cols-2 gap-6 items-center">
					<div id="text" data-aos="fade-down" data-aos-duration="1500">
						<h1 class="lg:text-5xl md:text-4xl text-3xl font-bold text-[#181945] wow animate__animated animate__fadeInLeft">Get in Touch</h1>
						<p class="text-lg font-medium mt-4 text-[#181945] opacity-60 wow animate__animated animate__fadeInLeft">Have any questions or inquiries? We're
							here to help. Reach out to us, and we'll get back to you as soon as possible.</p>
					</div>
					<div id="form" class="bg-[#E6F0FD] p-6 rounded-xl wow animate__animated animate__fadeInRight">
						<form action="#" data-aos="zoom-in" data-aos-duration="1500">
							<div class="mb-4">
								<input type="text" id="name" name="name" placeholder="Your Name"
									class="w-full border border-white p-3 rounded-lg mt-1 hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
									required />
							</div>
							<div class="mb-4">
								<input type="email" id="email" name="email" placeholder="name@gmail.com"
									class="w-full border border-white p-3 rounded-lg mt-1 hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
									required />
							</div>
							<div class="mb-4">
								<textarea id="message" name="message" rows="4" placeholder="Your Text"
									class="w-full border border-white p-3 rounded-lg mt-1 hover:border-[#0666EB] focus:outline-none focus:border-blue-500"
									required></textarea>
							</div>
							<button type="submit"
								class="w-full bg-[#0666EB] text-white font-semibold py-3 rounded-lg hover:bg-[#0666EB]">Send
								Message</button>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default contact