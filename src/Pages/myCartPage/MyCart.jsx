import { useLoaderData } from "react-router-dom";
import MyAllCart from "./MyallCart";

const MyCart = () => {
  const productsBrandLoader = useLoaderData();
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-6">
        My All Brand Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-12 my-6">
        {/* brands card  */}
        {productsBrandLoader.map((brand) => (
          <MyAllCart key={brand.id} productsBrand={brand}></MyAllCart>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
