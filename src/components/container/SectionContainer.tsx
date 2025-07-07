import React, { ReactNode } from 'react';

interface SectionContainerProps {
  title?: string;
  link?: string;
  linkTitle?: string;
  desc?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  childClassName?: string;
  bgColor?: boolean;
  slug?: string;
  backcolor?: string;
  bgImage?: string; // New prop for background image
  Attachment?:string
  height?:string
}

const SectionContainer = (props: SectionContainerProps) => {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: props.bgImage ? `url(${props.bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: props.bgImage ? 'transparent' : props.backcolor || (props.bgColor ? 'bg-black' : 'white'),
        height:props.height
      }}
    >
      {/* Black Overlay */}
      {props.bgImage && (
        <div className="absolute inset-0 bg-black opacity-75 "></div>
      )}

      <div className={`relative text-gray-600 body-font ${props.className}`}>
        <div className="flex flex-col w-full items-center gap-2 justify-center">
          <span className="text-red-600">{props.slug}</span>
          <h3 className={`text-[24px] md:text-[40px] md:w-[40rem] px-5 md:px-0 leading-tight text-center font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent`}>
            {props.title}
          </h3>
          <p className="md:text-[18px] w-full md:px-0 px-5 md:w-[80rem] text-white font-light text-[14px] text-center">
            {props.desc}
          </p>
        </div>
        <div className="flex flex-row items-center w-full justify-center">
          <div className={`${props.childClassName}`}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
