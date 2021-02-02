import React from "react";

function MainImage(props) {
  return (
    <div>
      <div>
        <div
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
          39%,rgba(0,0,0,0)
          41%,rgba(0,0,0,0.65)
          100%),
          URL('${props.image}'), #1c1c1c`,
            height: "500px",
            backgroundSize: "100%, cover",
            backgroundPosition: "center, center",
            width: "100%",
            position: "relative",
          }}
        >
          <h2 style={{ color: "white" }}>{props.title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
