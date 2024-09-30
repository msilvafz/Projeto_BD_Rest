import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cursoEditando, setCursoEditando] = useState(null);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cursos");
      setCursos(response.data);
    } catch (error) {
      console.error("Erro ao buscar cursos:", error);
    }
  };

  const handleEdit = (curso) => {
    setCursoEditando(curso);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este curso?")) {
      try {
        await axios.delete(`http://localhost:3000/cursos/${id}`);
        fetchCursos();
      } catch (error) {
        console.error("Erro ao excluir curso:", error);
      }
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:3000/cursos/${cursoEditando._id}`,
        cursoEditando
      );
      setShowModal(false);
      fetchCursos();
    } catch (error) {
      console.error("Erro ao atualizar curso:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCursoEditando((prevCurso) => ({
      ...prevCurso,
      [name]: value,
    }));
  };

  const renderCarouselItems = () => {
    const items = [];

    for (let i = 0; i < cursos.length; i += 3) {
      items.push(
        <Carousel.Item key={i}>
          <Row className="text-center">
            {cursos.slice(i, i + 3).map((curso) => {
              const precoOriginal = parseFloat(curso.preço);
              const desconto = parseFloat(curso.promoção);
              const precoComDesconto =
                precoOriginal - precoOriginal * (desconto / 100);

              return (
                <Col key={curso._id} md={4}>
                  <Card className="mb-4">
                    <Card.Img
                      variant="top"
                      src={curso.imagem}
                      alt={curso.nome}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{curso.nome}</Card.Title>
                      <Card.Text>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                        >
                          R$ {precoOriginal.toFixed(2)}
                        </span>
                        <br />
                        <strong>Desconto: {desconto}%</strong>
                        <br />
                        <strong>
                          Preço com Desconto: R$ {precoComDesconto.toFixed(2)}
                        </strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Carousel.Item>
      );
    }

    return items;
  };

  return (
    <Container>
      <h2 className="my-4">Cursos Disponíveis</h2>
      <Carousel interval={3000} indicators={false} controls={true}>
        {renderCarouselItems()}
      </Carousel>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={cursoEditando?.nome || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                name="descrição"
                value={cursoEditando?.descrição || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                name="preço"
                value={cursoEditando?.preço || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Promoção (%)</Form.Label>
              <Form.Control
                type="number"
                name="promoção"
                value={cursoEditando?.promoção || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>URL da Imagem</Form.Label>
              <Form.Control
                type="text"
                name="imagem"
                value={cursoEditando?.imagem || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cursos;
