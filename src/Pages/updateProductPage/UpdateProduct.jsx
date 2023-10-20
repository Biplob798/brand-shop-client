import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  console.log(product);

  return (
    <div>
      <h2>this is update product page</h2>
    </div>
  );
};

export default UpdateProduct;
