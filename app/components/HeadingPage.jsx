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
  <section className="min-h-screen w-full mt-10 lg:mt-20 relative bg-[url('/assets/background/heading-bg.png')] bg-center bg-contain bg-no-repeat mb-52">
    <div className="w-full flex flex-col items-center justify-center relative">
      <h1 className="headingPage">{heading1}</h1>
      <p className="p_heading">
        {p_heading1_1}
        <br />
        {p_heading1_2}
      </p>
      <div className="flex gap-3 justify-center w-[80%]">
        <Image src={image1_src} alt={image1_alt} width={595} height={393} />
        <Image src={image2_src} alt={image2_alt} width={320} height={393} />
      </div>
      <div className="flex w-[70%] absolute bottom-[-65%] z-10">
        <h2 className="heading_2Page flex-[0.30]">{heading2}</h2>
        <div className="flex-[0.70] flex flex-col">
          <p className="p_heading_2">{p_heading2_1}</p>
          <p className="p_heading_2 mt-6">{p_heading2_2}</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeadingPage;
