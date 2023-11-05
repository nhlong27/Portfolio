import { Text } from "@components/common/Text";
import React from "react";
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
      className="relative py-20 lg:py-[120px]  mt-8 z-10"
    >
      <div className="absolute inset-0 w-full h-1/2 skew-y-3 bg-white -z-10"></div>
      <div className="absolute inset-0 w-full h-3/4 mt-auto bg-white -z-10 shadow-md rounded-b-xl"></div>
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
                    <div className="flex gap-4 items-center justify-start">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <Text variant="xl/bold/black">LinkedIn</Text>
                    </div>
                    <Text
                      variant="md/normal/primary"
                      className="hover:underline transition-full duration-200   overflow-hidden whitespace-pre-wrap"
                    >
                      https://www.linkedin.com/in/nhlong2706/
                    </Text>
                  </a>
                </div>
              </div>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="w-full">
                  {/* @ts-ignore */}
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText("(+84) 097 189 0498");
                      setIsPhoneCopied(true);
                    }}
                    className="flex gap-3 flex-col cursor-pointer relative"
                  >
                    <div className="flex gap-4 items-center">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <Text variant="xl/bold/black">Phone number</Text>
                    </div>
                    <Text
                      variant="lg/normal/primary"
                      className=" transition-full duration-200 overflow-hidden whitespace-nowrap"
                    >
                      (+84) 097 189 04 98
                    </Text>
                    <span
                      className={`absolute bottom-0 right-0 transition-all  duration-200 ease-out overflow-hidden px-8 py-3  bg-primary/70 w-[5rem] flex justify-center items-center text-white shrink rounded-lg h-[2rem] shadow-md ${
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
                      setIsEmailCopied(true);
                    }}
                    className="flex gap-3 flex-col cursor-pointer relative"
                  >
                    <div className="flex gap-4 items-center">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <Text variant="xl/bold/black">Email address</Text>
                    </div>
                    <Text
                      variant="lg/normal/primary"
                      className=" transition-full duration-200 overflow-hidden whitespace-nowrap"
                    >
                      nhlong2706@gmai.com
                    </Text>
                    <span
                      className={`absolute bottom-0 right-0 transition-all  duration-200 ease-out overflow-hidden px-8 py-3  bg-primary/70 w-[5rem] flex justify-center items-center text-white shrink rounded-lg h-[2rem] shadow-md ${
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
              <form method="POST" action="https://formspree.io/f/mdorogll">
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
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
                    name="phone"
                    placeholder="Your Phone"
                    className="text-body-color focus:border-primary w-full rounded border border-[f0f0f0] py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    name="message"
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
