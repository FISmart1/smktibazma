import clsx from "clsx";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "./magicui/blur-fade";
import { Card } from "@nextui-org/react";

const skills = [
    {
        img: "https://smktibazma.sch.id/static/media/pertamina-logo.0f8b5fe2cf85d7513ea7.png",
        link: "https://www.pertamina.com/",
    },
    {
        img: "https://smktibazma.sch.id/static/media/elnusa-logo.d84e16ea60ac7c8bb895.png",
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
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
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
