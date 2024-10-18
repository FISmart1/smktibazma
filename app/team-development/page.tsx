'use client';

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Skeleton } from "@nextui-org/react";

function App() {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Front-End Developer</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./team/1.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-tiny text-white/60 uppercase font-bold">Fadhil Rabbani</p>

            {/* <p className="text-black text-tiny">Available soon.</p> */}
          </div>
          {/* <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button> */}
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Front-End Developer & UI/UX</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./team/3.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className=" text-white/60 text-tiny uppercase font-bold">M. Abdullah Al-Aziz</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Back-End Developer & UX</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./team/5.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-tiny text-white/60 uppercase font-bold">Attar Rifai</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">DevOps engineer & Guru Pembimbing</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./team/2.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-tiny text-white/60 uppercase font-bold">I Gde Bayu Priyambada</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Back-End Developer</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./team/4.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-tiny text-white/60 uppercase font-bold">Mufiz Ihsanulhaq</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Back-End Developer</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="./team/6.png"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-tiny text-white/60 uppercase font-bold">M. Saeful Romadhon</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}


export default function PricingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-7xl flex flex-col gap-4  mt-8">
        <App />
      </div>
    </div>
  );
}
