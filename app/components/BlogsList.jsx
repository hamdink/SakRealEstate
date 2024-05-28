"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogs } from "@app/constants";

const BlogCard = ({
  src,
  alt,
  category,
  desc,
  profileImage,
  profileName,
  date,
  id,
}) => {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/blogs/blog?id=${id}`);
  };

  return (
    <div
      className="flex flex-col justify-start items-start w-[392px] h-[490px] p-4 border border-[#E8E8EA] rounded-[12px] gap-y-4 hover:cursor-pointer"
      onClick={handleCardClick}
    >
      <Image src={src} alt={alt} width={360} height={249} />
      <button className="bg-[#4B6BFB] bg-opacity-5 rounded-[6px] py-[4px] px-[10px] font-medium font-poppins text-[#4B6BFB] text-[14px] leading-5">
        {category}
      </button>
      <p className="font-poppins font-semibold text-[24px] text-[#181A2A] leading-7 ">
        {desc}
      </p>
      <div className="w-[287px] h-[36px] flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <Image src={profileImage} alt={profileName} width={36} height={36} />
          <span className="font-medium font-poppins text-[16px] text-[#97989F] leading-6">
            {profileName}
          </span>
        </div>
        <span className="font-normal font-poppins text-[16px] text-[#97989F] leading-6">
          {date}
        </span>
      </div>
    </div>
  );
};

const BlogsList = () => {
  return (
    <section className="w-full p-4">
      <div className="w-full flex gap-2 flex-wrap justify-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsList;
