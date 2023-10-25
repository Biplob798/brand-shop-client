import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const newProduct = { name, price, description, brand, type, rating, photo };
    const newBrand = { brand, photo };

    console.log(newProduct);

    // send data to the server product
    fetch(
      " https://brand-shop-server-side-cbsspyp0v-biplobs-projects-623841b5.vercel.app/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    // send data to the server brants
    fetch(
      " https://brand-shop-server-side-cbsspyp0v-biplobs-projects-623841b5.vercel.app/brand",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBrand),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      {" "}
      <div className="my-12 p-8 bg-[rgb(203,187,149)]">
        <Link to="/">
          <p className="p-4">Back to home</p>
          <hr className="mb-4" />
        </Link>
        <h2 className="text-3xl text-white font-sm text-center p-6">
          Add New Product
        </h2>
        <hr className="mb-6" />

        <form onSubmit={handleAddProduct} className="space-y-6">
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

export default AddProduct;
