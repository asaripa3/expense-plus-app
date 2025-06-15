
import { cn } from '@/lib/utils';
import React from 'react';

type PhoneMockupProps = {
  imgSrc?: string;
  videoSrc?: string;
  className?: string;
  bgColor?: string;
  children?: React.ReactNode;
};

const PhoneMockup = ({ imgSrc, videoSrc, className, bgColor, children }: PhoneMockupProps) => {
  return (
    <div className={cn("relative mx-auto border-black bg-black border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
      <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-black absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-black absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div
        className="rounded-[2rem] overflow-hidden w-full h-full relative flex items-center justify-center"
        style={{ backgroundColor: bgColor || 'black' }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-full z-10"></div>
        {children ? (
          children
        ) : videoSrc ? (
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
          imgSrc && <img src={imgSrc} className="w-3/4 object-contain" alt="App Screenshot" />
        )}
      </div>
    </div>
  );
};

export default PhoneMockup;
