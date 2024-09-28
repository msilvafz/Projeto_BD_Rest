import React, { useEffect, useState } from "react";

function Signup() {
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Verifica se o tipo de usuário foi selecionado anteriormente
    const selectElement = document.getElementById("inputState");
    if (selectElement) {
      setSelectedRole(selectElement.value);
    }
  }, []);

  const handleSelectChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedRole || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Simples redirecionamento baseado no tipo de usuário selecionado
    if (selectedRole === "Aluno") {
      window.location.href = "/alunocursos/home";
    } else if (selectedRole === "Professor") {
      window.location.href = "/professorcursos/home";
    } else if (selectedRole === "Administrador") {
      window.location.href = "/adminCursos/home";
    } else {
      alert("Tipo de usuário incorreto.");
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
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com*"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlFor="emailInput">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>

              <div className="mb-3">
                <label htmlFor="inputState" className="form-label">
                  Acessar como:
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  onChange={handleSelectChange}
                  value={selectedRole}
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
                Login
              </button>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
