import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewDetailsProduct = useLoaderData();

  console.log(viewDetailsProduct);

  return <div>this is view details page</div>;
};

export default ViewDetails;
