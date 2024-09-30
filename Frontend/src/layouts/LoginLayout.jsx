import "../assets/css/stt.css";

const LoginLayout = () => (
  <div className="wrapper">
    <div className="title-text">
      <div className="title login-aluno">Login Aluno</div>
      <div className="title login-professor">Login Professor</div>
      <div className="title login-admin">Login Admin</div>
    </div>
    <div className="form-container">
      <div className="slide-controls">
        <input type="radio" name="slide" id="login-aluno" />
        <input type="radio" name="slide" id="login-professor" />
        <input type="radio" name="slide" id="login-admin" />
        <label htmlFor="login-aluno" className="slide login-aluno">
          Aluno
        </label>
        <label htmlFor="login-professor" className="slide login-professor">
          Professor
        </label>
        <label htmlFor="login-admin" className="slide login-admin">
          Admin
        </label>
        <div className="slider-tab"></div>
      </div>
      <div className="form-inner">
        <form action="#" className="login-aluno">
          <div className="field">
            <input type="text" placeholder="Endereço Email" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Senha" required />
          </div>
          <div className="pass-link">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
        </form>
        <form action="#" className="login-professor">
          <div className="field">
            <input type="text" placeholder="Email Institucional" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Senha" required />
          </div>
          <div className="pass-link">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
    <script src="lgc.js"></script>
  </div>
);

export default LoginLayout;
