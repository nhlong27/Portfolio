import { helper } from "@/lib/helper";
import { Text } from "@components/common/Text";
import React from "react";

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
    <section id="contacts" className="relative z-10 mt-20 py-20">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-pink-300 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 mt-auto h-3/4 w-full rounded-b-xl bg-transparent"></div>
      <div className="container mx-auto w-full max-w-[1000px] md:w-3/4">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] px-8 lg:mb-0">
              <Text
                variant="xl/bold/black"
                className="mb-6 font-poppins text-[28px] font-bold uppercase text-pink-400"
              >
                GET IN TOUCH
              </Text>
              <div className="mb-8 mt-16 flex w-full max-w-[370px]">
                <div className="w-full">
                  <a
                    href={helper.urls.linkedin}
                    target="_blank"
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-start gap-4">
                      {helper.SVGs.linkedin("h-6 w-6 text-tertiary")}
                      <Text variant="md/bold/black" className="text-tertiary">
                        LinkedIn
                      </Text>
                    </div>
                    <Text
                      variant="sm/normal/black"
                      className="transition-full overflow-hidden whitespace-pre-wrap text-surface-foreground duration-200 hover:underline"
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
                      {helper.SVGs.phone("h-6 w-6 text-tertiary")}
                      <Text variant="md/bold/black" className="text-tertiary">
                        Phone number
                      </Text>
                    </div>
                    <Text
                      variant="sm/normal/primary-foreground"
                      className=" transition-full overflow-hidden whitespace-nowrap text-surface-foreground duration-200"
                    >
                      (+84) 097 189 04 98
                    </Text>
                    <span
                      className={`bg-primary/70 absolute bottom-0 right-0  flex h-[2rem] w-[5rem] shrink items-center  justify-center overflow-hidden rounded-lg px-8 py-3 text-background shadow-md transition-all duration-200 ease-out ${
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
                      {helper.SVGs.email("h-6 w-6 text-tertiary")}
                      <Text variant="md/bold/black" className="text-tertiary">
                        Email address
                      </Text>
                    </div>
                    <Text
                      variant="sm/normal/primary-foreground"
                      className=" transition-full overflow-hidden whitespace-nowrap text-surface-foreground duration-200"
                    >
                      nhlong2706@gmai.com
                    </Text>
                    <span
                      className={`bg-primary/70 absolute bottom-0 right-0  flex h-[2rem] w-[5rem] shrink items-center  justify-center overflow-hidden rounded-lg px-8 py-3 text-background shadow-md transition-all duration-200 ease-out ${
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
            <div className="relative rounded-lg bg-background bg-gradient-to-tr from-background via-background to-surface p-8 shadow-sm sm:p-12">
              <form method="POST" action="https://formspree.io/f/mdorogll">
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="text-body-color w-full rounded border border-[f0f0f0] bg-surface px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="text-body-color w-full rounded border border-[f0f0f0] bg-surface px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    className="text-body-color w-full rounded border border-[f0f0f0] bg-surface px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Your Message"
                    className="text-body-color w-full resize-none rounded border border-[f0f0f0] bg-surface px-[14px] py-3 text-base outline-none focus:border-primary focus-visible:shadow-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-primary bg-primary p-3 tracking-wider text-background transition hover:shadow-lg"
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
