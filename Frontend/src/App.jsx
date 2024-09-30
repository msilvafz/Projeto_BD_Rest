import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Contato from "./components/main/Contato";
import Cursos from "./components/main/Cursos";
import Inicio from "./components/main/Inicio";
import Sobre from "./components/main/Sobre";

import AlunoCursos from "./components/aluno/Cursos";
import AlunoCursosDetalhes from "./components/aluno/CursosDetalhes";
import AlunoCursosHome from "./components/aluno/Home";
import AlunoSuporte from "./components/aluno/Suporte";
import AlunoLayout from "./layouts/AlunoLayout";

import ProfessorCadastro from "./components/professor/Cadastro";
import ProfessorCursos from "./components/professor/Cursos";
import ProfessorHome from "./components/professor/HomeProfessor";
import ProfessorLayout from "./layouts/ProfessorLayout";

import CursosAdmin from "./components/admin/Cursos";
import Home from "./components/admin/Home";
import Usuario from "./components/admin/Usuario";
import AdminLayout from "./layouts/AdminLayout";

import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/css/App.css";
import SignUpCadastro from "./components/main/SignupCadastro";
import SignUpLogin from "./components/main/SingupLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="signup" element={<SignUpCadastro />} />
          <Route path="signuplogin" element={<SignUpLogin />} />
        </Route>

        <Route path="/alunocursos" element={<AlunoLayout />}>
          <Route path="home" element={<AlunoCursosHome />} />
          <Route path="cursos" element={<AlunoCursos />} />
          <Route path="cursos/:id" element={<AlunoCursosDetalhes />} />
          <Route path="suporte" element={<AlunoSuporte />} />
        </Route>

        <Route path="/professorcursos" element={<ProfessorLayout />}>
          <Route path="cadastro" element={<ProfessorCadastro />} />
          <Route path="cursos" element={<ProfessorCursos />} />
          <Route path="home" element={<ProfessorHome />} />
        </Route>

        <Route path="/adminCursos" element={<AdminLayout />}>
          <Route path="cursosAdmin" element={<CursosAdmin />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
