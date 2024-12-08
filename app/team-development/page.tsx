'use client';

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Skeleton } from "@nextui-org/react";

const teamMembers = [
  {
    role: "Lead Front-End Developer",
    name: "Fadhil Rabbani",
    imageSrc: "./team/1.webp",
  },
  {
    role: "Front-End Developer & UI/UX",
    name: "M. Abdullah Al-Aziz",
    imageSrc: "./team/3.webp",
  },
  {
    role: "User Experience",
    name: "Attar Rifai",
    imageSrc: "./team/5.webp",
  },
  {
    role: "Guru Development & Pembimbing",
    name: "I Gde Bayu Priyambada",
    imageSrc: "./team/2.webp",
  },
  {
    role: "Back-End Developer",
    name: "Mufiz Ihsanulhaq",
    imageSrc: "./team/4.webp",
  },
  {
    role: "Back-End Developer",
    name: "M. Saeful Romadhon",
    imageSrc: "./team/6.webp",
  },
];

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="max-w-[900px] gap-5 grid grid-cols-12 grid-rows-2 px-8">
      {teamMembers.map((member, index) => (
        <Card key={index} className="col-span-12 sm:col-span-4 h-[300px] relative">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">{member.role}</h4>
          </CardHeader>
          <Skeleton isLoaded={isLoaded} className="z-0 w-full sm:h-full h-[300px]">
            <Image
              alt="Card background"
              className="object-cover"
              src={member.imageSrc}
              onLoad={() => setIsLoaded(true)}
              isZoomed
              isBlurred
            />
          </Skeleton>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-tiny text-white uppercase font-bold">{member.name}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-7xl flex flex-col gap-4 mt-8">
        <App />
      </div>
    </div>
  );
}
