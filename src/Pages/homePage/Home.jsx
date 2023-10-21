import { useLoaderData } from "react-router-dom";
import FollowInstagram from "../../Components/followInstagram/FollowInstagram";
import Banner from "../../Components/header/banner/Banner";

import BrandsCard from "./BrandsCard";
import CustomerFeedback from "../../Components/CustomerFeedback/CustomerFeedback";

const Home = () => {
  const productsBrandLoader = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <div className=" bg-gray-400 mb-6 p-4">
          <h2 className="text-center font-bold text-2xl p-6  text-white mb-8">
            World Best Brands In Our Shop{" "}
          </h2>
          <p className="text-white text-center font-thin text-xs">
            We are a bespoke branding firm with a zest for strong & purposeful
            design. We are thinkers, creators, problem solvers and artists. We
            bring creative flair and strategic thinking to every project, to
            ensure we craft brands that are recognized, remembered and revered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* brands card  */}
          {productsBrandLoader.slice(0, 6).map((brand) => (
            <BrandsCard key={brand.id} productsBrand={brand}></BrandsCard>
          ))}
        </div>
      </div>
      <FollowInstagram></FollowInstagram>
      <CustomerFeedback></CustomerFeedback>
    </div>
  );
};

export default Home;
