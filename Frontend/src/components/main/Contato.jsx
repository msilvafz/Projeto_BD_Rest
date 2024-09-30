import React from "react";

const Contato = () => {
  return (
    <div className="container my-5">
      <form class="row g-3 d-flex flex wrap">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            title="Digite seu email"
          />
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">
            Nome
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            title="Digite seu nome"
          />
        </div>

        <div class="col-md-6">
          <label for="cpf" class="form-label">
            CPF
          </label>
          <input
            type="text"
            name="cpf"
            class="form-control"
            pattern="\d{3}.\d{3}.\d{3}-\d{2}"
            title="Digite um CPF no formato: xxx.xxx.xxx-xx"
          ></input>
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Cidade
          </label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            title="Digite sua cidade"
            required
          />
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Estado
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            title="Digite seu estado"
            required
          />
        </div>
        {/* <div class="col-md-2">
          <label for="inputZip" class="form-label">
            CEP
          </label>
          <input type="text" class="form-control" id="inputZip" required/>
        </div> */}

        <div class="col-6">
          <label for="inputState" class="form-label">
            Cursos
          </label>
          <select id="inputState" class="form-select">
            <option>...</option>
            <option selected>React</option>
            <option selected>Java Script</option>
            <option selected>HTML</option>
            <option selected>CSS</option>
          </select>
        </div>

        <div class="col-12">
          <label for="inputMensagem" class="form-label">
            Enviar Mensagem
          </label>
          <textarea
            rows="4"
            class="form-control"
            id="inputMensagem"
            autoComplete="off"
            required
          ></textarea>
        </div>

        {/* <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Senha
          </label>
          <input type="password" class="form-control" id="inputPassword4" required/>
        </div> */}

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Verificação de Segurança
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-success">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
