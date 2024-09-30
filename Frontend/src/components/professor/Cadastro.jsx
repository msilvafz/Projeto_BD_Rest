import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Cadastro = () => {
  const [cursos, setCursos] = useState([]);
  const [newCurso, setNewCurso] = useState({
    nome: "",
    descrição: "",
    preço: "",
    imagem: "",
    video: "",
    promoção: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user");
      setCursos(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewCurso({ ...newCurso, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/cursos",
        newCurso
      );
      const addCursos = response.data;
      setCursos([...cursos, addCursos]);
      setNewCurso({
        nome: "",
        descrição: "",
        preço: "",
        imagem: "",
        video: "",
        promoção: "",
      });
      setShowAddForm(false);
    } catch (error) {
      console.error("Erro ao adicionar Curso:", error);
    }
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const getYouTubeEmbedUrl = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="mt-5">
            <Card.Body>
              <h2 className="text-center mb-4">Cadastro de Curso</h2>

              <Form onSubmit={handleAdd}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome do Curso*</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={newCurso.nome}
                    onChange={handleAddChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Descrição*</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="descrição"
                    value={newCurso.descrição}
                    onChange={handleAddChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Preço*</Form.Label>
                  <Form.Control
                    type="number"
                    name="preço"
                    value={newCurso.preço}
                    onChange={handleAddChange}
                    required
                    min="0"
                    step="0.01"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Promoção*</Form.Label>
                  <Form.Control
                    type="number"
                    name="promoção"
                    value={newCurso.promoção}
                    onChange={handleAddChange}
                    required
                    min="0"
                    step="0.01"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>URL da Imagem*</Form.Label>
                  <Form.Control
                    type="text"
                    name="imagem"
                    value={newCurso.imagem}
                    onChange={handleAddChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>URL do Vídeo</Form.Label>
                  <Form.Control
                    type="text"
                    name="video"
                    value={newCurso.video}
                    onChange={handleAddChange}
                  />
                </Form.Group>
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

              {newCurso.imagem && (
                <div className="mt-4">
                  <h5>Pré-visualização da Imagem:</h5>
                  <img
                    src={newCurso.imagem}
                    alt="Imagem do Curso"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              )}
              {newCurso.video && (
                <div className="mt-4">
                  <h5>Pré-visualização do Vídeo:</h5>
                  <iframe
                    width="100%"
                    height="315"
                    src={getYouTubeEmbedUrl(newCurso.video)}
                    title="Vídeo do Curso"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;
