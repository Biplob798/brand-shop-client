import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    // get field value
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, img, email, password);

    // validation password
    if (password.length < 6) {
      toast.error("Password must be 6 characters");
      return;
    }

    // create a user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {" "}
      <div className="hero min-h-screen p-8  ">
        <div className="hero-content flex-col bg-white text-black ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold border rounded-lg p-4 shadow-2xl">
              Register now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    name="img"
                    placeholder="image url"
                    required
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    className="input input-bordered"
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 p-0">
                  <button className="btn btn-outline">Register</button>
                </div>
                <label className="label">
                  Have a account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    please login
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
