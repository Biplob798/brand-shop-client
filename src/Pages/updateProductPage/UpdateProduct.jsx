import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const productLoader = useLoaderData();
  const { _id } = useParams();
  const updates = productLoader.find((product) => product._id === _id);

  // update handle

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      photo,
    };
    console.log(updateProduct);

    // send data to server

    fetch(
      ` https://brand-shop-server-side-cbsspyp0v-biplobs-projects-623841b5.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Product Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="my-12 p-8 bg-[rgb(203,187,149)]">
        <Link to="/">
          <p className="p-4">Back to home</p>
          <hr className="mb-4" />
        </Link>
        <h2 className="text-3xl text-white font-sm text-center p-6">
          Update Product
        </h2>
        <hr className="mb-6" />

        <form onSubmit={handleUpdateProduct} className="space-y-6">
          {/* form product name */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Product name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="product name"
                defaultValue={updates.name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form for price  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="price"
                defaultValue={updates.price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* form short description  */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Short description"
                defaultValue={updates.description}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Brands name  */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Brand name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="brand name"
                defaultValue={updates.brand}
                className="input input-bordered w-full"
              />
              <select>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="zara">Zara</option>
                <option value="hm">H/M</option>
                <option value="gucci">Gucci</option>
                <option value="panda">Panda</option>
              </select>
            </label>
          </div>

          {/* form Brands Type  */}

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-sm text-xl">
                Brand type
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="type"
                defaultValue={updates.type}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* form Brands Rating row  */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-sm text-xl">
                  Rating
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={updates.rating}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Brands photo url row  */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-sm text-xl">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  defaultValue={updates.photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Product"
            className="b btn btn-outline w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
