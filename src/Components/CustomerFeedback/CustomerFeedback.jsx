const CustomerFeedback = () => {
  return (
    <div>
      <div>
        <h2 className="text-white text-center font-bold text-4xl bg-amber-700 p-6">
          Message Us For Any Query
        </h2>
        {/* form  */}

        <div className="hero min-h-screen border bg-amber-700">
          <div className="hero-content">
            <div className="text-center lg:text-left"></div>
            <div className="card flex-shrink-0 w-full max-w-sm ">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-white">Message</span>
                  </label>
                  <textarea
                    placeholder="Write here"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="text-[#331A15] rounded-md btn bg-white ">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
