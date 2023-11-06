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
    <section id="contacts" className="relative z-10 mt-8  py-20 lg:py-[120px]">
      <div className="absolute inset-0 -z-10 h-1/2 w-full skew-y-3 bg-white"></div>
      <div className="absolute inset-0 -z-10 mt-auto h-3/4 w-full rounded-b-xl bg-white shadow-md"></div>
      <div className="container mx-auto w-full max-w-[1000px] md:w-3/4">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] px-8 lg:mb-0">
              <Text
                variant="XL/bold/black"
                className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
              >
                GET IN TOUCH
              </Text>
              <div className="mb-8 mt-16 flex w-full max-w-[370px]">
                <div className="w-full">
                  <a
                    href={urls.linkedin}
                    target="_blank"
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-start gap-4">
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
                      className="transition-full overflow-hidden whitespace-pre-wrap   duration-200 hover:underline"
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
                    className="relative flex cursor-pointer flex-col gap-3"
                  >
                    <div className="flex items-center gap-4">
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
                      className=" transition-full overflow-hidden whitespace-nowrap duration-200"
                    >
                      (+84) 097 189 04 98
                    </Text>
                    <span
                      className={`absolute bottom-0 right-0 flex  h-[2rem] w-[5rem] shrink items-center justify-center  overflow-hidden rounded-lg bg-primary/70 px-8 py-3 text-white shadow-md transition-all duration-200 ease-out ${
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
                    className="relative flex cursor-pointer flex-col gap-3"
                  >
                    <div className="flex items-center gap-4">
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
                      className=" transition-full overflow-hidden whitespace-nowrap duration-200"
                    >
                      nhlong2706@gmai.com
                    </Text>
                    <span
                      className={`absolute bottom-0 right-0 flex  h-[2rem] w-[5rem] shrink items-center justify-center  overflow-hidden rounded-lg bg-primary/70 px-8 py-3 text-white shadow-md transition-all duration-200 ease-out ${
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
                    className="text-body-color w-full rounded border border-[f0f0f0] px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="text-body-color w-full rounded border border-[f0f0f0] px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="text-body-color w-full rounded border border-[f0f0f0] px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Your Message"
                    className="text-body-color w-full resize-none rounded border border-[f0f0f0] px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-primary bg-primary p-3 tracking-wider text-white transition hover:bg-opacity-90"
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
