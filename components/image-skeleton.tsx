import { Image, Skeleton } from "@nextui-org/react";
import { useState } from "react";

export default function ImageWithSkeleton({
  src,
  alt,
  height,
  width,
  className = "", // tambahkan className sebagai optional prop dengan default value ""
}: {
  src: string;
  alt: string;
  height?: number; // optional
  width?: number;  // optional
  className?: string; // optional className prop
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Jika height dan width tidak ada, gunakan class w-full dan h-full
  const imgClass = height && width
    ? `object-cover rounded-xl block ${className}`
    : `w-full h-full object-cover rounded-xl ${className}`;

  return (
    <>
      {isLoading && <Skeleton className="w-[270px] h-[170px] rounded-lg" />}
      <Image
        src={src}
        alt={alt}
        className={`${imgClass} ${isLoading ? "hidden" : "block"}`}
        width={width} // tetap gunakan width jika tersedia
        height={height} // tetap gunakan height jika tersedia
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
