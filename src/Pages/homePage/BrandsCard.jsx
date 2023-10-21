import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const BrandsCard = ({ productsBrand }) => {
  const { brand, photo } = productsBrand;
  console.log(productsBrand);
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
          <img src={photo} alt="brandsName" className="rounded-x w-96 h-56" />
        </figure>
        <hr className="mt-6 " />
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-gray-700">
            {brand}!
          </h2>

          <div className="card-actions">
            {" "}
            <Link to={`brandProduct/${brand}`}>
              {" "}
              <button className="btn btn-outline">click Please</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
BrandsCard.propTypes = {
  productsBrand: PropTypes.object,
};
