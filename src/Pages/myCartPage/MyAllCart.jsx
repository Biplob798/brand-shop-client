import React from "react";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const MyAllCart = ({ productsBrand }) => {
  const { _id, brand, photo, name, description, rating, type, price } =
    productsBrand;
  console.log(productsBrand);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/*all brand product  */}
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
          <p className="text-2xl font-bold"> {name}</p>
          <p>{description}</p>
          <div className="flex justify-center items-center py-4 gap-4">
            {" "}
            <p>$ {price}</p>
            <p className="text-amber-600 font-bold">Rating {rating} ster</p>
            <p>{type}</p>
          </div>

          <div className="card-actions">
            {" "}
            <button className="w-full mt-4 btn btn-outline">
              view Details
            </button>
          </div>
          <div className="card-actions ">
            {" "}
            <button className="w-full mt-4 btn btn-outline">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAllCart;
MyAllCart.propTypes = {
  productsBrand: PropTypes.object,
};
