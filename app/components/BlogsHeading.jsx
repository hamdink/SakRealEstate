import Image from "next/image";

const BlogsHeading = () => {
  return (
    <section className="lg:h-[110vh] w-full flex flex-col justify-start items-center bg-[url('/assets/background/heading-bg.png')] bg-top bg-cover bg-no-repeat mt-5 lg:mt-10">
      <div className="lg:w-[80%] w-full flex flex-col items-center justify-center relative p-4">
        <h1 className="headingPage">Our Blogs</h1>
        <p className="p_heading">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
          <br />
          interdum ullamcorper sed pharetra sene.
        </p>
        <Image
          src="/assets/blogs/blogsImage.png"
          alt="blogsImage"
          width={1216}
          height={450}
          className="mt-10"
        />
        <div className="w-full absolute flex flex-col xl:left-[10%] lg:left-[5%] left-[7%] top-[60%]">
          <button className="w-[100px] h-[28px] rounded-[6px] px-[10px] py-[4px] bg-[#4B6BFB] border-none text-[14px] text-[#FFFFFF] leading-[20px] font-normal">
            Technology
          </button>
          <h2 className="font-poppins font-semibold xl:text-[36px] lg:text-[30px] text-[25px] text-[#FFFFFF] lg:leading-[40px] leading-[30px] xl:mt-6 mt-4">
            The Impact of Technology on the <br />
            Workplace: How Technology is Changing
          </h2>
          <div className="flex justify-between items-center w-[290px] xl:mt-6 mt-4">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/assets/blogs/client.svg"
                alt="client"
                width={36}
                height={36}
              />
              <span className="font-medium font-poppins text-[16px] text-[#FFFFFF] leading-[24px]">
                Client Name
              </span>
            </div>
            <span className="font-normal font-poppins text-[16px] text-[#FFFFFF] leading-[24px]">
              August 20, 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHeading;
