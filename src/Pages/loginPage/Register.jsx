import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");

  // password show korar jonno

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // get field value
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    console.log(name, img, email, password, terms);

    // reset error

    setRegisterError("");
    // validation password
    if (password.length < 6) {
      toast.error("Password must be 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!/[!@#$%^&*()_+{}/:;<>,.?~|-]/.test(password)) {
      setRegisterError("Your password should have a special character");
      return;
    } else if (!terms) {
      setRegisterError("Please accept our terms and conditions");
      return;
    }

    // create a user
    createUser(email, password)
      .then((result) => {
        handleUpdateProfile(name, img).then(() => {
          toast.success("user create successfully");
          e.target.reset();
          navigate("/");
          console.log(result);
        });
      })
      .catch((error) => {
        toast.error("please try again ");
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      {" "}
      <div className="hero min-h-screen p-8 bg-white text-black ">
        <div className="hero-content flex-col bg-white text-black">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold border rounded-lg p-4 shadow-2xl bg-white text-black">
              Register now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white text-black">
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
                    className="input input-bordered bg-white text-black"
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
                    className="input input-bordered bg-white text-black"
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
                    className="input input-bordered bg-white text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

                  {/* password filed toggle  */}
                  <div
                    className="flex
                  items-center relative "
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      required
                      className="input input-bordered bg-white text-black w-full"
                    />
                    {/* show password ar jonno handle  */}
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute "
                    >
                      {showPassword ? (
                        <FaEye></FaEye>
                      ) : (
                        <FaEyeSlash></FaEyeSlash>
                      )}
                    </span>
                  </div>
                  <div className="my-4">
                    {/* input for terms  */}
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">
                      Accept Our Terms And Conditions
                    </label>
                  </div>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 p-0">
                  <button className="btn btn-outline ">Register</button>
                </div>
                <label className="label">
                  Have a account?{" "}
                  <Link to="/login" className="label-text-alt link link-hover">
                    please login
                  </Link>
                </label>
              </div>
            </form>
            {registerError && (
              <p className="text-medium text-red-400 p-2 text-center">
                {registerError}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
