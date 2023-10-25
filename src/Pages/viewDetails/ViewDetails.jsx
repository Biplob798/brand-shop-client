import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const viewDetailsProduct = useLoaderData();

  const { _id } = useParams();

  const details = viewDetailsProduct.find((detail) => detail._id === _id);

  console.log(viewDetailsProduct);
  console.log(details);

  const handleAddCart = (details) => {
    const photo = details.photo;
    const name = details.name;
    const description = details.description;
    const newCart = { photo, name, description };

    //  send data to the server:
    fetch(
      " https://brand-shop-server-side-cbsspyp0v-biplobs-projects-623841b5.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "detail Added to Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-12 card bg-base-100 shadow-xl">
        <figure>
          <img src={details.photo} alt={details.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{details.description}</h2>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleAddCart(details)}
              className="btn btn-primary"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
