import Image from "next/image";
import { blogs } from "@app/constants";

const Blog = ({ id }) => {
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  if (!blog) return <p>blog not found</p>;

  return (
    <section className="lg:h-[150vh] w-full flex flex-col items-center bg-[url('/assets/background/heading-bg.png')] bg-top bg-cover bg-no-repeat mt-5 lg:mt-10">
      <div className="flex flex-col gap-y-5 w-[80%] justify-start items-center">
        <div className="xl:w-[70%] lg:w-[95%] w-full flex items-center justify-start mt-10">
          <span className="h-[32px] min-w-fit bg-[#D7AB32] rounded-[6px] py-[6px] px-3 flex justify-center items-center font-poppins font-medium text-[#FFFFFF] text-[14px] leading-5">
            {blog.category}
          </span>
        </div>
        <div className="xl:w-[70%] lg:w-[95%] w-full flex items-center justify-start mt-2">
          <h1 className="font-poppins font-semibold xl:text-[36px] lg:text-[25px] sm:text-[20px] text-[15px] text-[#181A2A] lg:leading-10 sm:leading-8 leading-6">
            {blog.desc}
          </h1>
        </div>
        <div className="xl:w-[70%] lg:w-[95%] w-full flex items-center justify-start mt-2">
          <div className="w-[253px] h-[36px] flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <Image
                src={blog.profileImage}
                alt={blog.profileName}
                width={36}
                height={36}
              />
              <span className="font-medium font-poppins text-[14px] text-[#97989F] leading-5">
                {blog.profileName}
              </span>
            </div>
            <span className="font-normal font-poppins text-[14px] text-[#97989F] leading-5">
              {blog.date}
            </span>
          </div>
        </div>
      </div>
      <Image
        src={blog.src}
        alt={blog.alt}
        width={800}
        height={462}
        className="rounded-[40px] mt-6 lg:px-0 px-6"
      />
    </section>
  );
};

export default Blog;
