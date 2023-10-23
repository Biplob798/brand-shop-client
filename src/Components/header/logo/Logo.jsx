import DarkMode from "../../darkAndLightMode/DarkMode";

const Logo = () => {
  return (
    <div>
      <div className=" hidden md:flex justify-center items-center gap-4 border py-2 bg-gray-500]">
        <img
          className="h-16 rounded-full"
          src="https://i.ibb.co/CJYbvFM/logo.jpg"
          alt=""
        />
        <h2 className="text-2xl font-mono font-bold">Brand Shop</h2>
        <DarkMode></DarkMode>
      </div>
    </div>
  );
};

export default Logo;
