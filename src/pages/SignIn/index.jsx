import { useState } from 'react';
import { useAuth } from '../../hook/auth'
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function SignIn() {

    // pegar o email do user
    const [email, setEmail] = useState("");
    // pegar a senha do user
    const [password, setPassword] = useState("");
    // pegar o signIn o useAuth
    const { signIn } = useAuth();
    // function para fazer login
    function handleSignIn() {
        signIn({ email, password });
    }


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

                <Input
                type="text"
                icon={FiMail} 
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                />

                <Input
                type="password"
                icon={FiLock} 
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">Criar conta</Link>
            </Form>
            
            <Background/>
        </Container>
    );
}