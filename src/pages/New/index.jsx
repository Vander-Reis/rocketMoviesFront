import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../service/api";
export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  //tags
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o titulo do filme!");
    }

    if (!rating) {
      return alert("Digite sua avaliação do filme!");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mais não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    const response = await api.post("/movies", {
      title,
      description,
      rating,
      tags,
    });

    alert("Filme criado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>

            <h1>Novo filme</h1>
          </header>

          <div className="input-content">
            <Input
              type="text"
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              type="text"
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <MovieItem
                  key={index}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <MovieItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="buttons">
            <Button className="button-delete" title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
