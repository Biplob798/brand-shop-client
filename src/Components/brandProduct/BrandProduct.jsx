import { Link, useLoaderData } from "react-router-dom";
import BrandProductCard from "./BrandProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BrandProduct = () => {
  const brandProduct = useLoaderData();
  console.log(brandProduct);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(brandProduct);
  const { _id, name, price, description, brand, type, rating, photo } =
    brandProduct;

  // No product in brandProduct

  if (brandProduct.length < 1) {
    return (
      <div className="card container mx-auto mt-48">
        <figure>
          <img src="https://i.ibb.co/1npyQn2/Product-not-pound.jpg" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <Link to="/">
              <button className="btn btn-outline">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* slid banner  */}
      <div>
        <h2 className="text-center font-bold text-2xl text-slate-500 p-2 ">
          {" "}
          Our BrandsProduct
        </h2>
        <hr className="mb-4" />
        <Slider {...settings}>
          <div className="card">
            <img className="w-full  h-48" src={photo} alt="" />
            <div className="text-center font-bold ">
              <h3>{brand}</h3>
            </div>
          </div>
          <div>
            <img className="w-full  h-48" src={photo} alt="" />

            <div className="text-center font-bold ">
              <h3>{brand}</h3>
            </div>
          </div>
          <div>
            <img className="w-full  h-48" src={photo} alt="" />
            <div className="text-center font-bold ">
              <h3>{brand}</h3>
            </div>
          </div>
        </Slider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
        {/* brands card  */}
        {brandProduct.slice(1, 5).map((brand) => (
          <BrandProductCard
            key={brand.id}
            productsBrand={brand}
          ></BrandProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
