import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import "../../assets/css/CursosProfessor.css";

const Cursos = ({ cursos: initialCursos, onUpdateCurso }) => {
  const [cursos, setCursos] = useState(initialCursos);
  const [showModal, setShowModal] = useState(false);
  const [currentCurso, setCurrentCurso] = useState(null);

  React.useEffect(() => {
    setCursos(initialCursos);
  }, [initialCursos]);

  const handleShow = (curso) => {
    setCurrentCurso({ ...curso });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentCurso(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCurso((prevCurso) => ({
      ...prevCurso,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (currentCurso) {
      const updatedCursos = cursos.map((curso) =>
        curso.id === currentCurso.id ? currentCurso : curso
      );
      setCursos(updatedCursos);
      onUpdateCurso(currentCurso);
      handleClose();
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Dificuldade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.id}</td>
              <td>{curso.nome}</td>
              <td>{curso.categoria}</td>
              <td>{curso.dificuldade}</td>
              <td>
                <Button variant="info" onClick={() => handleShow(curso)}>
                  Detalhes
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {currentCurso && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Curso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNome">
                <Form.Label>Nome do Curso</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={currentCurso.nome}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCategoria" className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  as="select"
                  name="categoria"
                  value={currentCurso.categoria}
                  onChange={handleChange}
                >
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Redes Sociais">Redes Sociais</option>
                  <option value="Lei">Lei</option>
                  <option value="Outros">Outros</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDificuldade" className="mb-3">
                <Form.Label>Dificuldade</Form.Label>
                <Form.Control
                  as="select"
                  name="dificuldade"
                  value={currentCurso.dificuldade}
                  onChange={handleChange}
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" onClick={handleSave}>
                Salvar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Cursos;
