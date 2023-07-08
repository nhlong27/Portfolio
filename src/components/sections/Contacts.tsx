import ContactForm from '@components/common/ContactForm';
import React from 'react'

const Contacts = () => {
  return (
    <section id="contacts" className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] rounded-sm mt-8">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH
              </h2>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-bold">LinkedIn</h4>
                  <a href='https://www.linkedin.com/in/long-nguyen-95517b250/' target='_blank' className="text-body-color text-base">
                  https://www.linkedin.com/in/long-nguyen-95517b250/
                  </a>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                  <p className="text-body-color text-base">(+84) 097 189 04 98</p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="w-full">
                  <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                  <p className="text-body-color text-base">nhlong2706@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
              <form method='post' action='https://formspree.io/f/mdorogll' onSubmit={(e)=>{e.preventDefault(); 
              console.log(e)}}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name='email'
                    placeholder="Your Email"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="text-body-color focus:border-primary w-full resize-none rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary border-primary w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts