import { bannersData } from "../constants";

const BannerItem = ({ value, label, highlight }) => (
  <div className="flex flex-col justify-center items-center">
    <span className="font-poppins font-extrabold xl:text-[75px] lg:text-[40px] text-[25px] text-[#242331] xl:leading-[82px] lg:leading-[40px] leading-[20px]">
      {value}{" "}
      {highlight && (
        <span className="font-poppins font-extrabold xl:text-[75px] lg:text-[40px] text-[25px] text-[#D7AB32] xl:leading-[82px] lg:leading-[40px] leading-[20px]">
          {highlight}
        </span>
      )}
    </span>
    <span className="font-poppins font-bold lg:text-[25px] text-[15px] text-[#242331] lg:leading-[39px] leading-[20px] xl:text-start text-center md:mt-0 mt-2">
      {label}
    </span>
  </div>
);

const Banners = () => {
  return (
    <section className="w-full lg:px-40 lg:py-10 md:px-15 md:py-5 px-5 py-2 md:mt-10 mt-5">
      <div className="w-full flex md:justify-evenly md:flex-row flex-col md:gap-y-0 gap-y-4 items-center">
        {bannersData.map((banner, index) => (
          <BannerItem
            key={index}
            value={banner.value}
            label={banner.label}
            highlight={banner.highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default Banners;
