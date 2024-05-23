import NeighborhoodProperties from "@app/components/NeighborhoodProperties";
import { listings } from "../constants";
import HeadingPage from "@app/components/HeadingPage";
import SwiperHouses from "@app/components/SwiperHouses";

const Listings = () => {
  return (
    <section className="w-full">
      <HeadingPage {...listings} />
      <NeighborhoodProperties />
      <SwiperHouses />
    </section>
  );
};

export default Listings;
