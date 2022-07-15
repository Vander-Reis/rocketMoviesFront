import { FiArrowLeft } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'

export function New() {
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
            <Input type="text" placeholder="Título" />

            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações"/>

          <Section title="Marcadores">
            <div className="tags">
              <MovieItem value="Ação"/>
              <MovieItem isNew placeholder="Novo Marcador"/>
            </div>
            
          </Section>

          <div className="buttons">
                <Button className="button-delete" title="Excluir filme"/>
                <Button title="Salvar alterações"/>
          </div>
        </Form>
      </main>
    </Container>
  );
}
