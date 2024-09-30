import React from "react";
import "../../assets/css/Inicio.css";
import { Link } from "react-router-dom";
import { UltimosVideos } from "./UltimosVideos";

const Inicio = () => {
  return (
    <>
      <div
        className="bg-dark text-secondary px-4 py-5 text-center text-white"
        id="inicio"
      >
        <div className="py-5">
          <h1 className="display-5 fw-bold">MESTRE DIGITAL</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4 text-white">
              Domine o mundo digital com nossos cursos especializados e
              impulsione seu negócio para o próximo nível. Na Mestre Digital,
              oferecemos treinamentos práticos e acessíveis que vão desde o uso
              eficiente das redes sociais até a criação de conteúdos visuais
              impactantes. Seja você um iniciante ou já experiente no mundo
              digital, nossos cursos são projetados para transformar habilidades
              em resultados concretos. Comece sua jornada de aprendizado hoje e
              descubra como a tecnologia pode ser sua maior aliada no sucesso
              profissional.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to="/cursos">
                <button
                  type="button"
                  className="btn btn-outline-info btn-lg px-4"
                >
                  Cursos
                </button>
              </Link>
              <Link to="/sobre">
                <button
                  type="button"
                  className=" btn btn-outline-info btn-lg px-4"
                >
                  Sobre
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <UltimosVideos />
    </>
  );
};

export default Inicio;
