import { Container, Content, NewMovie, Profile } from "./styles";
import { FiPlus } from "react-icons/fi";
import { MovieCard } from "../../components/MovieCard";
import { Input } from "../../components/Input";
import { api } from "../../service/api";
import { useAuth } from "../../hook/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
export function Home() {
  const [movies, setMovies] = useState([]);

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

  const [search, setSearch] = useState("");

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movies?title=${search}&tags`);
      setMovies(response.data);
    }

    fetchMovieNotes();
  }, [search]);

  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <Input 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar pelo título" />

        <div className="content">
          <div>
            <strong>{user.name}</strong>
            <button onClick={signOut}>Sair</button>
          </div>

          <Profile to="/profile">
            <img src={avatarUrl} alt="Foto do usuário" />
          </Profile>
        </div>

      </header>

      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </div>

        <section>
          {movies.map((movie) => (
            <MovieCard
              key={String(movie.ID)}
              data={movie}
              onClick={() => {handleDetails(movie.ID);}}
            />
          ))}
        </section>
      </Content>
    </Container>
  );
}
