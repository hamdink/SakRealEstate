import { valuesData } from "../constants";

const ValueCard = ({ icon, title, description }) => (
  <div className="max-w-[670px] min-h-[238px] py-[39px] px-[27px] rounded-[10px] bg-[#F9F9F9] flex">
    <div className="flex-[0.25] h-full bg-[#D7AB32] rounded-[23px] flex items-center justify-center">
      <span>{icon}</span>
    </div>
    <div className="flex-[0.75] flex flex-col ml-4 h-full">
      <span className="font-poppins font-bold text-[28px] text-[#242331] leading-[33px]">
        {title}
      </span>
      <p className="font-poppins font-normal text-[18px] text-[#797979] leading-[34px] text-start mt-4">
        {description}
      </p>
    </div>
  </div>
);

const Values = () => {
  return (
    <section className="w-full px-40 py-10 mt-10">
      <div className="w-full flex flex-col items-center justify-center mb-16">
        <span className="font-poppins font-medium text-[19px] text-[#D7AB32] leading-[29px] mb-10">
          Our Values
        </span>
        <h2 className="font-poppins font-extrabold text-[40px] text-[#242331] leading-[44px] text-center">
          The story and values behind
          <br />
          our company
        </h2>
      </div>
      <div className="w-full flex flex-wrap gap-4">
        {valuesData.map((value, index) => (
          <ValueCard
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Values;
