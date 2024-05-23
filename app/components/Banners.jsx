import { bannersData } from "../constants";

const BannerItem = ({ value, label, highlight }) => (
  <div className="flex flex-col justify-center items-center">
    <span className="font-poppins font-extrabold text-[75px] text-[#242331] leading-[82px]">
      {value}{" "}
      {highlight && (
        <span className="font-poppins font-extrabold text-[75px] text-[#D7AB32] leading-[82px]">
          {highlight}
        </span>
      )}
    </span>
    <span className="font-poppins font-bold text-[25px] text-[#242331] leading-[39px]">
      {label}
    </span>
  </div>
);

const Banners = () => {
  return (
    <section className="w-full px-40 py-10 mt-10">
      <div className="w-full flex justify-evenly items-center">
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
