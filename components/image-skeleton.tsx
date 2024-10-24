'use client';

import { Card, Image, Skeleton } from "@nextui-org/react";
import { useState } from "react";

export default function ImageWithSkeleton({
  src,
  alt,
  size,
  className = "", // tambahkan className sebagai optional prop dengan default value
}: {
  src: string;
  alt: string;
  size?: number; // tinggi dan lebar disamakan dengan size
  className?: string; // optional className prop
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {/* Skeleton akan tampil saat gambar belum selesai dimuat */}
      {isLoading && (
        <Card className={`w-[${size}px] space-y-5 p-4 rounded-lg absolute inset-0`}>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      )}

      {/* Gambar akan ditampilkan setelah selesai dimuat */}
      <Image
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? "hidden" : "block"} object-cover rounded-lg`}
        width={size}
        height={size}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
