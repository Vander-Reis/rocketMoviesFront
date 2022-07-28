import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { useAuth } from "../../hook/auth";
export function Header() {
  const { signOut, user } = useAuth();

  

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />

      <div className="content">
        <div>
          <strong>{user.name}</strong>
          <button onClick={signOut}>Sair</button>
        </div>

        <Profile to="/profile">
          <img src="https://github.com/Vander-Reis.png" alt="Foto do usuário" />
        </Profile>
      </div>
    </Container>
  );
}
