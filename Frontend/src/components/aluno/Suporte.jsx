import React from "react";
import SuporteImage from "../../assets/images/SuporteImage.svg";

function Suporte() {
  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <img
            src={SuporteImage}
            alt="Aluno"
            style={{ width: "100%", height: "700px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Suporte;
