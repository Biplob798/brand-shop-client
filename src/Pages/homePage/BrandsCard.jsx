import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BrandsCard = ({ brands }) => {
  const { brand_name, image_url } = brands;
  console.log(brands);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        className="card p-6 bg-gray-200 "
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <figure className="px-10 pt-10">
          <img
            src={image_url}
            alt="brandsName"
            className="rounded-x w-96 h-56"
          />
        </figure>
        <hr className="mt-6 " />
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-gray-700">
            {brand_name}!
          </h2>

          <div className="card-actions">
            <button className="btn btn-outline">click Please</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
BrandsCard.propTypes = {
  brands: PropTypes.object,
};
