import React from "react";

const Sobre = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://i.postimg.cc/15cvVRtj/SobreNos.png"
            alt="aboutimg"
            className="rounded shadow"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              marginLeft: "20px",
              marginBottom: "30px",
            }}
          ></img>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Sobre Nós
          </h1>
          <p className="lead">
            Somos um time de seis profissionais comprometidos em transformar o
            acesso ao conhecimento digital. Juntos, criamos uma plataforma de
            cursos em vídeo, desenvolvida para oferecer conteúdos práticos e
            acessíveis em diversas áreas. Com nossas habilidades combinadas em
            tecnologia, design, marketing e educação, buscamos capacitar pessoas
            e negócios a se adaptarem e prosperarem em um mundo cada vez mais
            conectado. Nossa missão é simplificar o aprendizado e tornar o
            sucesso acessível a todos.
          </p>
          <p className="lead">
            Nossa missão é oferecer uma experiência de aprendizado
            transformadora, proporcionando o conhecimento necessário para
            enfrentar os desafios e aproveitar as oportunidades de um mundo cada
            vez mais conectado. Com paixão por inovação e ensino, estamos aqui
            para ajudar você a crescer e alcançar novos níveis de sucesso.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Entre em Contato
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Me Contrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
