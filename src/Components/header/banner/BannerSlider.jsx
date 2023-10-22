import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl text-slate-500 p-2 ">
        {" "}
        Our Brands
      </h2>
      <hr className="mb-4" />
      <Slider {...settings}>
        <div className="card">
          <img
            className="w-full h-56"
            src="https://i.ibb.co/pxVyM9F/adidas.webp"
            alt=""
          />
          <div className="text-center font-bold ">
            <h3>Adidas</h3>
          </div>
        </div>
        <div>
          <img
            className="w-full h-56"
            src="https://i.ibb.co/pj9KNMR/guccihome.jpg"
            alt=""
          />

          <div className="text-center font-bold ">
            <h3>Gucci</h3>
          </div>
        </div>
        <div>
          <img
            className="w-full h-56"
            src="https://i.ibb.co/JjtDKvZ/nikehome.webp"
            alt=""
          />
          <div className="text-center font-bold ">
            <h3>Nike</h3>
          </div>
        </div>
        <div>
          <img
            className="w-full h-56"
            src="https://i.ibb.co/YtvL0pb/jarahome.jpg"
            alt=""
          />
          <div className="text-center font-bold ">
            <h3>Zara</h3>
          </div>
        </div>
        <div>
          <img
            className="w-full h-56"
            src="https://i.ibb.co/D7mnhwP/hmhome.jpg"
            alt=""
          />
          <div className="text-center font-bold ">
            <h3>H/M</h3>
          </div>
        </div>
        <div>
          <img
            className="w-full h-56"
            src="https://i.ibb.co/rw2gY0Y/pandahome.jpg"
            alt=""
          />
          <div className="text-center font-bold ">
            <h3>Panda</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
