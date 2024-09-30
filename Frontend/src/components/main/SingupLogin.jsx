import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    nome: "",
    senha: "",
    tipo: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { nome, senha, tipo } = formData;

    if (!nome || !senha || !tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        nome,
        senha,
      });

      if (response.status === 200) {
        const { token, userId, role } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userRole", role);

        // Redirecionar baseado no tipo de usuário
        if (tipo === "Aluno") {
          window.location.href = "/alunocursos/home";
        } else if (tipo === "Professor") {
          window.location.href = "/professorcursos/home";
        } else if (tipo === "Administrador") {
          window.location.href = "/adminCursos/home";
        }
      }
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error.response?.data?.message || error.message
      );
      alert(
        `Erro ao fazer login: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://i.postimg.cc/Y9WBqnkF/Sign-Up-Login.png"
              alt="loginimg"
              className="rounded shadow"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                marginLeft: "20px",
                marginBottom: "30px",
              }}
            />
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  placeholder="Nome de usuário"
                  value={formData.nome}
                  onChange={handleChange}
                />
                <label htmlFor="nome">Nome de usuário</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  placeholder="Senha"
                  value={formData.senha}
                  onChange={handleChange}
                />
                <label htmlFor="senha">Senha</label>
              </div>

              <div className="mb-3">
                <label htmlFor="tipo" className="form-label">
                  Acessar como:
                </label>
                <select
                  id="tipo"
                  className="form-select"
                  onChange={handleChange}
                  value={formData.tipo}
                >
                  <option value="">...</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
