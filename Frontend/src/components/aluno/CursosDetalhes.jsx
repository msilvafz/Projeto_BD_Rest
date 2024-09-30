import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../assets/css/CursosDetalhes.css";

function CursoDetalhes() {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <div className="mb-4">
        <Link to="/alunocursos/cursos" className="btn btn-primary">
          Voltar
        </Link>
      </div>

      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="card shadow h-100">
            <div className="card-header py-3 text-center">
              <h6 className="m-0 font-weight-bold text-primary">Video</h6>
            </div>
            <div className="card-body p-0">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  allowFullScreen
                  title="Video"
                  className="embed-responsive-item"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-header py-3 text-center">
              <h6 className="m-0 font-weight-bold text-primary">Aulas</h6>
            </div>
            <div className="card-body">
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 1</h6>
                  Base de Fundamentos
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 2</h6>
                  Base de Fundamentos II
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 3</h6>
                  Base de Fundamentos III
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 4</h6>
                  Base de Fundamentos IV
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 5</h6>
                  Base de Fundamentos V
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 6</h6>
                  Base de Fundamentos VI
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <h6 className="m-0 font-weight-bold text-primary">Aula 7</h6>
                  Base de Fundamentos VII
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursoDetalhes;
