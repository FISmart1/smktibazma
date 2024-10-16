"use client";
import Banner from "@/components/banner";
import { Contact } from "@/components/card";
import Footer from "@/components/footer";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function ServicePage() {
  return (
    <div className="flex flex-col justify-center items-start">
      <Banner heading="Saran & Masukan" imgSrc='https://smktibazma.sch.id/static/media/lapangan.8feef39bc2c2eaa90525.jpg'/>

      <div className="py-8 lg:py-16 flex flex-col gap-4 px-4 mx-auto max-w-5xl">
        <div style={{ width: '100%' }}>
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=SMK%20TI%20BAZMA+(SMK%20TI%20VAZNA)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Map"
          ></iframe>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-4xl tracking-tight font-extrabold text-start text-blue-800 dark:text-white">
            Saran & Masukan
          </h1>
          <p className=" font-light text-start text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <div className="grid lg:flex w-full gap-4">
            <div className="w-full">
              <form action="#" className="space-y-8">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="firstName" label="First Name" />
                  <Input type="lastName" label="LastName" />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="email" label="Email" />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="w-full h-auto"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" py-4 gap-4">

          <h1 className="text-3xl sm:text-4xl font-black text-blue-800 ">
            Join Us
          </h1>
          <div className="grid lg:flex items-center justify-between">
            <div className=" lg:w-3/4">
              <Contact />
            </div>
            <div className="flex flex-col items-center justify-center py-4 px-8 sm:px-6 " >
              <img
                src="/img/cta-join.png"
                className="w-1/2 h-auto mb-6"
                alt="CTA Join"
              />
              <p className="text-center text-base sm:text-lg lg:text-md text-gray-600 mb-6 max-w-xl">
                Bergabung dengan Saluran Whatsapp SMK TI BAZMA untuk informasi terbaru!!!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl py-6 px-8"   onClick={() => window.open('https://www.whatsapp.com/channel/0029VaX3o1jEKyZBKsNhFk0D', '_blank')}
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Join  */}


      <Footer />
    </div>
  );
}
