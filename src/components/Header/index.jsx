import { Container, Profile } from "./styles";
import { useAuth } from "../../hook/auth";
import { api } from "../../service/api";
export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>
    
      <div className="content">
        <div>
          <strong>{user.name}</strong>
          <button onClick={signOut}>Sair</button>
        </div>

        <Profile to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Profile>
      </div>
    </Container>
  );
}
