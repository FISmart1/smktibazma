type BannerProps = {
  imgSrc: string;
  heading: string;
};

export default function Banner({ imgSrc, heading }: BannerProps) {
  return (
    <div className='relative w-full h-[768px]'>
      <div className='absolute inset-0'>
        <img
          src={imgSrc}
          alt='Background'
          className='w-full h-full object-cover object-center top-0 left-0 right-0 bottom-0'
        />
      </div>

      <div className='absolute inset-y-0 left-0 w-full bg-gradient-to-tr from-blue-800 to-transparent'></div>

      <div className='relative z-10 w-full flex items-end h-full'>
        <div className='text-white w-full inline-flex mx-auto my-auto px-4 max-w-7xl items-center mb-10'>
          <h1 className='text-5xl md:text-6xl font-black md:leading-[64px] w-1/2 uppercase'>{heading}</h1>
        </div>
      </div>
    </div>
  );
}
