import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Tab, Table, Tabs } from "react-bootstrap";

const Usuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedUsuario, setEditedUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo: "",
  });
  const [newUsuario, setNewUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo: "Aluno",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const responseAlunos = await axios.get(
        "http://localhost:3000/user/tipo/Aluno"
      );
      const responseProfessores = await axios.get(
        "http://localhost:3000/user/tipo/Professor"
      );
      const responseAdmins = await axios.get(
        "http://localhost:3000/user/tipo/Admin"
      );

      setUsuarios([
        ...responseAlunos.data,
        ...responseProfessores.data,
        ...responseAdmins.data,
      ]);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const handleEdit = (id) => {
    const usuario = usuarios.find((usuario) => usuario._id === id);
    setEditingId(id);
    setEditedUsuario({ ...usuario });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUsuario({ ...editedUsuario, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/user/${editingId}`,
        editedUsuario
      );
      const updatedUsuario = response.data;
      setUsuarios(
        usuarios.map((usuario) =>
          usuario._id === editingId ? updatedUsuario : usuario
        )
      );
      setEditingId(null);
      setEditedUsuario({ nome: "", email: "", senha: "", tipo: "" });
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este Usuário?")) {
      try {
        await axios.delete(`http://localhost:3000/user/${id}`);
        setUsuarios(usuarios.filter((usuario) => usuario._id !== id));
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
    }
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewUsuario({ ...newUsuario, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        newUsuario
      );
      const addedUsuario = response.data;
      setUsuarios((prevUsuarios) => [...prevUsuarios, addedUsuario]);
      setNewUsuario({ nome: "", email: "", senha: "", tipo: "" });
      setShowAddForm(false);
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const renderUserTable = (tipo) => (
    <Table striped bordered hover style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {usuarios
          .filter((usuario) => usuario.tipo === tipo)
          .map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario._id}</td>
              <td>
                {editingId === usuario._id ? (
                  <Form.Control
                    type="text"
                    name="nome"
                    value={editedUsuario.nome}
                    onChange={handleChange}
                  />
                ) : (
                  usuario.nome
                )}
              </td>
              <td>
                {editingId === usuario._id ? (
                  <Form.Control
                    type="text"
                    name="email"
                    value={editedUsuario.email}
                    onChange={handleChange}
                  />
                ) : (
                  usuario.email
                )}
              </td>
              <td>
                {editingId === usuario._id ? (
                  <Form.Control
                    type="password"
                    name="senha"
                    value={editedUsuario.senha}
                    onChange={handleChange}
                  />
                ) : (
                  "********"
                )}
              </td>
              <td>
                {editingId === usuario._id ? (
                  <>
                    <Button
                      variant="success"
                      onClick={handleSave}
                      style={{ marginRight: "5px" }}
                    >
                      Salvar
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setEditingId(null)}
                    >
                      Cancelar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="warning"
                      onClick={() => handleEdit(usuario._id)}
                      style={{ marginRight: "5px" }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(usuario._id)}
                    >
                      Excluir
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <h1>Usuários:</h1>
      <Tabs defaultActiveKey="Aluno" id="uncontrolled-tab-example">
        <Tab eventKey="Aluno" title="Alunos">
          {renderUserTable("Aluno")}
        </Tab>
        <Tab eventKey="Professor" title="Professores">
          {renderUserTable("Professor")}
        </Tab>
        <Tab eventKey="Admin" title="Administradores">
          {renderUserTable("Admin")}
        </Tab>
      </Tabs>
      {showAddForm && (
        <div style={{ margin: "20px 0" }}>
          <h3>Adicionar Novo Usuário</h3>
          <Form onSubmit={handleAdd}>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nome"
                name="nome"
                value={newUsuario.nome}
                onChange={handleAddChange}
                required
              />
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={newUsuario.email}
                onChange={handleAddChange}
                required
              />
              <Form.Control
                type="password"
                placeholder="Senha"
                name="senha"
                value={newUsuario.senha}
                onChange={handleAddChange}
                required
              />
              <Form.Select
                name="tipo"
                value={newUsuario.tipo}
                onChange={handleAddChange}
                required
              >
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
                <option value="Admin">Admin</option>
              </Form.Select>
            </InputGroup>
            <Button variant="primary" type="submit">
              Adicionar
            </Button>
            <Button
              variant="secondary"
              onClick={toggleAddForm}
              style={{ marginLeft: "10px" }}
            >
              Cancelar
            </Button>
          </Form>
        </div>
      )}
      <Button
        variant="primary"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
        onClick={toggleAddForm}
      >
        <span>+</span>
      </Button>
    </div>
  );
};

export default Usuario;
