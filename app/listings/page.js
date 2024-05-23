import { listings } from "../constants";
import HeadingPage from "@app/components/HeadingPage";

const Listings = () => {
  return (
    <section>
      <HeadingPage {...listings} />
    </section>
  );
};

export default Listings;
