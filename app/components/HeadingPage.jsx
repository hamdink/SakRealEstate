import Image from "next/image";

const HeadingPage = ({
  heading1,
  p_heading1_1,
  p_heading1_2,
  image1_src,
  image1_alt,
  image2_src,
  image2_alt,
  heading2,
  p_heading2_1,
  p_heading2_2,
}) => (
  <section className="h-[150vh] bg-[url('/assets/background/heading-bg.png')] bg-top bg-cover bg-no-repeat lg:mb-24 md:mb-6 mb-48">
    <div className="w-full flex flex-col items-center justify-center mt-14">
      <h1 className="headingPage">{heading1}</h1>
      <p className="p_heading">
        {p_heading1_1}
        <br />
        {p_heading1_2}
      </p>
      <div className="flex flex-col md:flex-row gap-2 sm:gap-3 items-center lg:px-0 px-4 mt-4">
        <Image src={image1_src} alt={image1_alt} width={595} height={393} />
        <Image src={image2_src} alt={image2_alt} width={320} height={393} />
      </div>
      <div className="flex lg:flex-row lg:gap-x-2 flex-col sm:px-0 px-4 md:mt-10 mt-6 w-[80%]">
        <h2 className="heading_2Page sm:flex-[0.30]">{heading2}</h2>
        <div className="sm:flex-[0.70] flex flex-col">
          <p className="p_heading_2">{p_heading2_1}</p>
          <p className="p_heading_2 sm:mt-6 mt-2">{p_heading2_2}</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeadingPage;
