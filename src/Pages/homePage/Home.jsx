import { Helmet } from "react-helmet-async";

import FollowInstagram from "../../Components/followInstagram/FollowInstagram";
import Banner from "../../Components/header/banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BrandShop | Home</title>
      </Helmet>
      <Banner></Banner>
      <FollowInstagram></FollowInstagram>
    </div>
  );
};

export default Home;
