import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { user, signIn, googleLogin } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    // sinIn a user
    signIn(email, password)
      .then((result) => {
        toast.success("user create successfully");
        e.target.reset();
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("please try again");
        console.log(error);
      });
  };

  //   google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("user create successfully");
        console.log(result);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("please try again");
        console.log(error);
      });
  };

  return (
    <div>
      {" "}
      <div className="hero min-h-screen bg-white text-black p-6">
        <div className="hero-content flex-col bg-white text-black">
          <div className="text-center lg:text-left bg-white text-black">
            <h1 className="text-5xl font-bold border rounded-lg p-4 shadow-2xl bg-white text-black">
              Login now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white text-black">
            <form onSubmit={handleSignIn}>
              <div className="card-body">
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
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    className="input input-bordered bg-white text-black"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 p-0">
                  <button className=" btn btn-outline">Login</button>
                </div>
                <label className="label">
                  New here?{" "}
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Create an account
                  </Link>
                </label>
              </div>
            </form>
            <p className="text-center space-x-5 p-4">
              <button
                onClick={handleGoogleLogin}
                className=" btn btn-sm bg-white text-black"
              >
                Google
              </button>
              <button className=" btn btn-sm bg-white text-black">
                Github
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
