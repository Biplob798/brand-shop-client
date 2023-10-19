import { useState } from "react";

const DarkMode = () => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("enable Dark Mode");
    }
  };

  return (
    <div>
      <div className="container" style={myStyle}>
        <button onClick={toggleStyle} type="button" className="btn btn-outline">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default DarkMode;
