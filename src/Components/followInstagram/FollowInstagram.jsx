import Aos from "aos";
import { useEffect } from "react";
const FollowInstagram = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="text-center mt-8 py-6">
        {" "}
        <span className="text-sm">Follow Us Now</span>
        <h2 className="font-bold text-2xl">Follow on Instagram</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center p-12 bg-slate-200 mb-6">
        <div data-aos="fade-right">
          <img
            data-aos="fade-right"
            className="w-96 h-48"
            src="https://i.ibb.co/LJ4wb14/adidas1.jpg"
            alt=""
          />
        </div>

        <div data-aos="fade-right">
          <img
            className="w-96 h-48"
            src="https://i.ibb.co/F5qg18m/zara3.jpg"
            alt=""
          />
        </div>

        <img
          className="w-96 h-48"
          src="https://i.ibb.co/nncqcVB/nike4.jpg"
          alt=""
        />
        <img
          className="w-96 h-48"
          src="https://i.ibb.co/tbRFfmt/Ppanda3.jpg"
          alt=""
        />
        <img
          className="w-96 h-48"
          src="https://i.ibb.co/YTwmtL5/hm4.jpg"
          alt=""
        />
        <img
          className="w-96 h-48"
          src="https://i.ibb.co/wzRtMWf/panda2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FollowInstagram;
