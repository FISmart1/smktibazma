import clsx from "clsx";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "./magicui/blur-fade";
import { Card } from "@nextui-org/react";

const skills = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF9_o_8tUKntUT42hTNyudTw2IfQyddaJTfgY31f2PdzzgDqfTzlRp1gZLUGfRSXwBjsc&usqp=CAU",
        link: "https://www.pertamina.com/",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Jc5zoUGz5xw1ItpDcqBu1F8AWKWWq2fpeQ&s",
        link: "https://www.elnusa.co.id/",
    },
    {
        img: "https://pertaminapatraniaga.com/images/pertamina.svg",
        link: "https://pertaminapatraniaga.com/",
    },
    {
        img: "https://elnusapetrofin.co.id/wp-content/uploads/2019/12/Logo-1-300x166.jpg", 
        link: "https://elnusapetrofin.co.id/en/about-epn/", 
    },
    
];

const firstRow = skills.slice(0, Math.ceil(skills.length));

const SkillCard = ({ img, link }: { img: string; link: string }) => {
    return (
        <Card
            className={clsx(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex items-center justify-center w-full h-full">
                {img ? (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img className="w-full h-full" alt="skill" src={img} />
                    </a>
                ) : (
                    <span className="text-gray-400">No Image Available</span> // Placeholder jika tidak ada gambar
                )}
            </div>
        </Card>
    );
};

export function SkillsMarquee() {
    return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden">
            <BlurFade delay={0.25} inView>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((skill, index) => (
                        <SkillCard key={index} img={skill.img} link={skill.link} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </BlurFade>
        </div>
    );
}
