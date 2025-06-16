import Image from "next/image";

export default function About() {
  return (
    <div className="w-full flex  justify-center font-abel">
      <div className="lg:w-[75%] w-[90%]">
        <div className="flex justify-center items-center lg:pt-16 pt-10">
        <Image 
            src="/about.webp" 
            alt="NHC National Housing Company Logo" 
            width={200} 
            height={200}
            className="transition-transform hover:scale-105 duration-300"
            priority
          />        </div>
       <div className="flex flex-col my-14">
       <div className="flex flex-col gap-2.5">
          <p className="text-nhc-blue ">About NHC National Housing Company</p>
          <p className="leading-relaxed">
            NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437
            AH to be the investment arm of the initiatives and programs of the
            Ministry of Municipal and Rural Affairs and Housing in the real
            estate, residential and commercial sectors. Then the Company came
            under state ownership in May of the year 2020, after which it
            entered a new stage in its journey and became an effective enabler
            of solutions for the Saudi real estate market. To become a leader in
            the real estate development sector and enable the public and private
            sectors to develop strategic partnerships with them. NHC is also
            keen to provide quality projects across urban communities with
            modern designs and various housing solutions at reasonable prices
            that keep pace with the aspirations of the future generation and
            achieve quality of life, in partnership with experienced and
            efficient real estate developers.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 my-9">
          <p className="text-nhc-blue">National Housing Strategy</p>
          <p className="leading-relaxed">
            The NHC Strategy aims for the Company to be an enabler of the real
            estate supply system by empowering the private sector to develop the
            real estate market and improve the professionalism of the services
            provided in it, thus offering broader horizons for the Company in
            enhancing the sustainability of its business and the work of the
            real estate supply system.
          </p>
        </div>
       </div>
      </div>
    </div>
  );
}
