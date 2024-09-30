import React from "react";

const Cursos = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Nossos Cursos</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 className="fs-2 text-body-emphasis">Curso 1</h3>
          <p>JS</p>
          <a href="#" className="icon-link">
            Link do Curso
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 className="fs-2 text-body-emphasis">Curso 2</h3>
          <p>Phyton</p>
          <a href="#" className="icon-link">
            Link do Curso
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
          <h3 className="fs-2 text-body-emphasis">Curso 3</h3>
          <p>Html + CSS</p>
          <a href="#" className="icon-link">
            Link do Curso
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
