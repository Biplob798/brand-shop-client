import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandProductCard = ({ productsBrand }) => {
  console.log(productsBrand);
  const { _id, name, price, description, brand, type, rating, photo } =
    productsBrand;
  return (
    <div>
      {/* brand product  */}
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
            <Link to={`/viewDetails/${_id}`}>
              {" "}
              <button className="w-full mt-4 btn btn-outline">
                view Details
              </button>
            </Link>
          </div>
          <div className="card-actions">
            {" "}
            <Link to={`/updateProduct/${_id}`}>
              <button className="w-full mt-4 btn btn-outline">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductCard;
BrandProductCard.propTypes = {
  productsBrand: PropTypes.object,
};
