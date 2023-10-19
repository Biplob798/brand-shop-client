import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="text-center text-6xl p-16">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  //   wait for loading

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;
Private.propTypes = {
  children: PropTypes.node,
};
