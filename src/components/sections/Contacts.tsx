import ContactForm from "@components/common/ContactForm";
import { Text } from "@components/common/Text";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {MdEmail} from 'react-icons/md'
import {FaPhoneSquareAlt} from 'react-icons/fa'
import { urls } from "src/constants/urls";
const Contacts = () => {
  const [isPhoneCopied, setIsPhoneCopied] = React.useState(false);
  const [isEmailCopied, setIsEmailCopied] = React.useState(false);
  React.useEffect(() => {
    if (isPhoneCopied) {
      setTimeout(() => {
        setIsPhoneCopied(false);
      }, 1000);
    }
    if (isEmailCopied) {
      setTimeout(() => {
        setIsEmailCopied(false);
      }, 1000);
    }
  }, [isPhoneCopied, isEmailCopied]);

  return (
    <section
      id="contacts"
      className="relative py-20 lg:py-[120px] rounded-sm mt-8 z-10"
    >
      <div className="absolute inset-0 w-full h-1/2 skew-y-3 bg-white -z-10"></div>
      <div className="absolute inset-0 w-full h-3/4 mt-auto bg-white -z-10 shadow-md"></div>
      <div className="container w-full md:w-3/4 max-w-[1000px] mx-auto">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0 px-8">
              <Text
                variant="XL/bold/black"
                className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
              >
                GET IN TOUCH
              </Text>
              <div className="mb-8 flex w-full max-w-[370px] mt-16">
                <div className="w-full">
                  <a
                    href={urls.linkedin}
                    target="_blank"
                    className="flex gap-3 flex-col"
                  >
                    <div className="flex gap-4 items-center">
                      <BsLinkedin size={30} />
                      <Text variant="xl/bold/black">LinkedIn</Text>
                    </div>
                    <Text
                      variant="md/normal/primary"
                      className="hover:underline transition-full duration-200   overflow-hidden whitespace-pre-wrap"
                    >
                      https://www.linkedin.com/in/long-nguyen-95517b250/
                    </Text>
                  </a>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="w-full">
                  {/* @ts-ignore */}
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText("(+84) 097 189 04 98");
                      setIsPhoneCopied(true)
                    }}
                    className="flex gap-3 flex-col cursor-pointer relative"
                  >
                    <div className="flex gap-4 items-center">
                      <FaPhoneSquareAlt size={32} />
                      <Text variant="xl/bold/black">Phone number</Text>
                    </div>
                    <Text
                      variant="lg/normal/primary"
                      className=" transition-full duration-200 overflow-hidden whitespace-nowrap"
                    >
                      (+84) 097 189 04 98
                    </Text>
                    <span
                      className={`absolute bottom-0 right-0 transition-all  duration-200 ease-out overflow-hidden px-8 py-3  bg-primary/70 w-[5rem] flex justify-center items-center text-white shrink rounded-lg h-[2rem] ${
                        isPhoneCopied ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Copied
                    </span>
                  </div>
                  <h4 className="text-dark mb-1 text-xl font-bold"></h4>
                  <p className="text-body-color text-base"></p>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="w-full">
                <div
                    onClick={() => {
                      navigator.clipboard.writeText("(+84) 097 189 04 98");
                      setIsEmailCopied(true)
                    }}
                    className="flex gap-3 flex-col cursor-pointer relative"
                  >
                    <div className="flex gap-4 items-center">
                      <MdEmail size={35} />
                      <Text variant="xl/bold/black">Email address</Text>
                    </div>
                    <Text
                      variant="lg/normal/primary"
                      className=" transition-full duration-200 overflow-hidden whitespace-nowrap"
                    >
                      nhlong2706@gmai.com
                    </Text>
                    <span
                      className={`absolute bottom-0 right-0 transition-all  duration-200 ease-out overflow-hidden px-8 py-3  bg-primary/70 w-[5rem] flex justify-center items-center text-white shrink rounded-lg h-[2rem] ${
                        isEmailCopied ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Copied
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
              <form
                method="POST"
                action="https://formspree.io/f/mdorogll"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    name='name'
                    placeholder="Your Name"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name='phone'
                    placeholder="Your Phone"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    name='message'
                    placeholder="Your Message"
                    className="text-body-color focus:border-primary w-full resize-none rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary border-primary w-full rounded border p-3 tracking-wider text-white transition hover:bg-opacity-90"
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
};

export default Contacts;
