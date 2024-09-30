const loginAlunoBtn = document.querySelector("label.login-aluno");
const loginProfessorBtn = document.querySelector("label.login-professor");
const loginFormAluno = document.querySelector("form.login-aluno");
const loginFormProfessor = document.querySelector("form.login-professor");
const loginTitleAluno = document.querySelector(".title.login-aluno");
const loginTitleProfessor = document.querySelector(".title.login-professor");

loginProfessorBtn.onclick = () => {
  loginFormAluno.style.marginLeft = "-50%";
  loginTitleAluno.style.marginLeft = "-50%";
};

loginAlunoBtn.onclick = () => {
  loginFormAluno.style.marginLeft = "0%";
  loginTitleAluno.style.marginLeft = "0%";
};
