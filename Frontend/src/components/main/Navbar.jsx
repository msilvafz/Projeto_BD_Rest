import React from "react";
import "../../assets/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/logo-mestre-digital.png"
            width="50"
            height="50"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Pagina Inicial
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                Cursos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </li>
          </ul>
          <form className="d-flex gap-2" role="search">
            <Link to="/signuplogin">
              <button className="btn btn-info" type="submit">
                Entrar
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-success" type="submit">
                Cadastrar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
