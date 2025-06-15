
import { cn } from '@/lib/utils';

type PhoneMockupProps = {
  imgSrc?: string;
  videoSrc?: string;
  className?: string;
};

const PhoneMockup = ({ imgSrc, videoSrc, className }: PhoneMockupProps) => {
  return (
    <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-10"></div>
        {videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            key={videoSrc}
          />
        ) : (
          <img src={imgSrc} className="w-full h-full object-cover" alt="App Screenshot" />
        )}
      </div>
    </div>
  );
};

export default PhoneMockup;
