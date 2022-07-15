import { Container, Profile } from './styles';
import { Input } from '../Input';

export function Header() {

    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título"/>
            
            <Profile to="/profile">
                 <div>
                    <strong>Vander Reis</strong>
                    <span>Sair</span>
                 </div>
                 <img 
                    src="https://github.com/Vander-Reis.png"
                    alt="Foto do usuário"
                 />
            </Profile>
            
        </Container>
    );
    
}