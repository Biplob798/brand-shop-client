import { useLoaderData } from "react-router-dom";
import AddCart from "../../Components/addCart/AddCart";

const MyCart = () => {
  const myCart = useLoaderData();

  return (
    <div>
      <div>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
          {myCart.map((cart) => (
            <AddCart key={cart._id} cart={cart}></AddCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
