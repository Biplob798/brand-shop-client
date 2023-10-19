import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const products = useLoaderData();

  return (
    <div>
      <h2>this is update product page {products.length}</h2>
    </div>
  );
};

export default UpdateProduct;
