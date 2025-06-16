import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white w-full flex flex-col lg:px-28 px-4 mt-auto h-32 font-abel">
      <div className="w-full h-14" />
      <div className="flex-1 border-t border-footer-border/10 flex justify-between items-center flex-wrap">
        <div className="hidden md:flex gap-8 ">
          <Image src="/NHC.svg" alt="logo" width={31} height={32} />
          <Image src="/vision.svg" alt="logo" width={48} height={32} />
        </div>
        <p className="lg:text-end text-sm">
          All rights reserved © 2022 - Developed and operated by National
          Housing
        </p>
      </div>
    </footer>
  );
}
