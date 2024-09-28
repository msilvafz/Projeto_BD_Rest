import React, { useState } from "react";

function Signup() {
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    tipo: ''
  });

  const handleSelectChange = (event) => {
    setSelectedRole(event.target.value);
    setFormData(prevData => ({
      ...prevData,
      tipo: event.target.value 
    }));
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nome, email, cpf, senha, tipo } = formData;

    if (!nome || !email || !cpf || !senha || !tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const newUser = { id: Date.now().toString(), nome, email, cpf, senha, tipo };

    if (tipo === "Aluno") {
      const savedAlunos = JSON.parse(localStorage.getItem("alunos")) || [];
      savedAlunos.push(newUser);
      localStorage.setItem("alunos", JSON.stringify(savedAlunos));
      window.location.href = "/alunocursos/home";
    } else if (tipo === "Professor") {
      const savedProfessores = JSON.parse(localStorage.getItem("professores")) || [];
      savedProfessores.push(newUser);
      localStorage.setItem("professores", JSON.stringify(savedProfessores));
      window.location.href = "/professorcursos/home";
    } else if (tipo === "Administrador") {
      const savedAdmins = JSON.parse(localStorage.getItem("admin")) || [];
      savedAdmins.push(newUser);
      localStorage.setItem("admin", JSON.stringify(savedAdmins));
      window.location.href = "/adminCursos/home";
    } else {
      alert("Por favor, selecione uma opção válida.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://i.postimg.cc/8CGrpMNZ/signUp.png"
              alt="aboutimg"
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
                  placeholder="Nome completo*"
                  value={formData.nome}
                  onChange={handleChange}
                />
                <label htmlFor="nome">Nome</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com*"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  pattern="\d{3}\d{3}\d{3}\d{2}"
                  placeholder="CPF*"
                  value={formData.cpf}
                  onChange={handleChange}
                />
                <label htmlFor="cpf">CPF</label>
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
                <label htmlFor="inputState" className="form-label">
                  Se cadastrar como:
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  onChange={handleSelectChange}
                  value={formData.tipo}
                >
                  <option value="">...</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Li e estou de
                  acordo com as{" "}
                  <b>políticas da empresa e políticas de privacidade</b>.
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Inscrever-se
              </button>

              <hr className="my-4" />
              <small className="text-body-secondary">
                Ao clicar em Inscrever-se, você concorda com os termos de uso.
              </small>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
