import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/Bi";
import { AiOutlineMail } from "react-icons/Ai";

const Footer = () => {
  return (
    <div>
      <div className="footer flex justify-center items-center bg-[#101b2d] text-white p-4 my-6">
        {/* left side  */}
        <div>
          <img
            className="h-16"
            src="https://i.ibb.co/CJYbvFM/logo.jpg"
            alt=""
          />
          <p className="text-base font-semibold">Brand Shop</p>
          <p className="text-sm font-light">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex justify-center items-center gap-2">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
          <p>Get in Touch</p>
          <div className="flex justify-center items-center gap-2">
            <BiSolidPhoneCall></BiSolidPhoneCall>
            <p>+88 01533 333 333</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <AiOutlineMail></AiOutlineMail>
            <p className="text-base font-semibold">info@gmail.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaLocationArrow></FaLocationArrow>
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
