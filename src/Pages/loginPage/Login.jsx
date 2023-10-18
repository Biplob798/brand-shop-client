import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const { user, signIn, googleLogin } = useContext(AuthContext);
  console.log(user);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    // sinIn a user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        Navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="border bg-orange-400">
      {" "}
      <div className="hero min-h-screen border bg-slate-700 p-6">
        <div className="hero-content flex-col bg-black">
          <div className="text-center lg:text-left bg-black text-white">
            <h1 className="text-5xl font-bold border rounded-lg p-4 shadow-2xl">
              Login now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <button className=" btn btn-outline">Login</button>
                </div>
                <label className="label">
                  New here? <Link to="/register">Create an account</Link>
                </label>
              </div>
            </form>
            <p className="text-center space-x-5 p-4">
              <button
                onClick={handleGoogleLogin}
                className=" btn btn-sm bg-white"
              >
                Google
              </button>
              <button className=" btn btn-sm bg-white">Github</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
