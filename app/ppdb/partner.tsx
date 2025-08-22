import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        link: "Jack",
        img: "/partner/partner-1.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-2.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-3.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-4.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-5.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-6.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-7.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-8.webp"
    },
    {
        link: "Jack",
        img: "/partner/partner-9.webp"
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    link,
}: {
    img: string;
    link: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
                // light styles
                // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="200" height="100" alt={link} src={img} />
            </div>
        </figure>
    );
};

export function DaftarMitra() {
    return (
        <div className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:10s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.link} {...review} />
                ))}
            </Marquee>
        </div>
    );
}
