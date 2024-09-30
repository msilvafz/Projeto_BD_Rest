import React from "react";
import Professor from "../../assets/images/ProfessorImg.png";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="card shadow mb-4"
        style={{ maxWidth: "950px", width: "100%" }}
      >
        <div className="card-body">
          <img
            src={Professor}
            alt="Professor"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              objectFit: "cover",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
