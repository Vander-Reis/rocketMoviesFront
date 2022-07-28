import { FiArrowLeft } from "react-icons/fi";
import {
  Container,
  Content,
  MovieInfo,
  TitleRating,
  AuthorInfo,
} from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Ratings } from "../../components/Ratings";
import { Tag } from "../../components/Tag";
import { FiClock } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { useAuth } from "../../hook/auth"
import { format } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Details() {

  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;
  
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");
    if(confirm) {
      await api.delete(`/movies/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovies();
  }, []);
  

  return (
    <Container>
      <Header />

      { data && (
        <main>
        <Content>
          <div className="buttons">
            <button onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>

            <ButtonText title="Excluir filme" 
            onClick={handleRemove} isActive />
          </div>

          <MovieInfo>
            <TitleRating>
              <h1>{data.title}</h1>
              <Ratings rating={data.rating} />
            </TitleRating>

            <AuthorInfo>
              <div>
                <img src={avatarUrl} alt={user.name} />
                <span>Criado por {user.name}</span>
              </div>

              <div>
                <FiClock />
                <span>{format(new Date(data.created_at), "dd'/'MM'/'yy 'às' HH':'mm", {
                    locale: ptBR,
                  })}</span>
              </div>
            </AuthorInfo>

            { data.tags &&
                data.tags.map(tag => (
                  <Tag 
                  key={String(tag.id)}
                  title={tag.name} 
                  />
                ))
            }
            <p>{data.description}</p>
          </MovieInfo>
        </Content>
      </main>
      )
        
      }
    </Container>
  );
}
