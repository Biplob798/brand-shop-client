import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BannerBrandProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-2xl text-slate-500 p-2 ">
          {" "}
          Our BrandsProduct
        </h2>
        <hr className="mb-4" />
        <Slider {...settings}>
          <div className="card">
            <img
              className="w-full  h-48"
              src="https://i.ibb.co/b6prD4t/nike2.webp"
              alt=""
            />
            <div className="text-center font-bold ">
              <h3>Nike</h3>
            </div>
          </div>
          <div>
            <img
              className="w-full  h-48"
              src="https://i.ibb.co/s65FVXj/nike3.webp"
              alt=""
            />

            <div className="text-center font-bold ">
              <h3>Nike</h3>
            </div>
          </div>
          <div>
            <img
              className="w-full  h-48"
              src="https://i.ibb.co/3Fzn14B/nike4.jpg"
              alt=""
            />
            <div className="text-center font-bold ">
              <h3>Nike</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerBrandProduct;
