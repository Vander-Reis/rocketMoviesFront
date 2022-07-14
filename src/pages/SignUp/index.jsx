import { FiUser,FiMail,FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input
                type="text"
                icon={FiUser} 
                placeholder="Nome"
                />

                <Input
                type="text"
                icon={FiMail} 
                placeholder="E-mail"
                />

                <Input
                type="password"
                icon={FiLock} 
                placeholder="Senha"
                />

                <Button title="Cadastrar"/>

                <a href="#"><FiArrowLeft/> Voltar para o login</a>
            </Form>
            
            <Background/>
        </Container>
    );
}