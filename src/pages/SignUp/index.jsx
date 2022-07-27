import { useState } from 'react';
import { FiUser,FiMail,FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';

// pegar minha api
import { api } from '../../service/api';

export function SignUp() {

    // pegar o nome do usuario
    const [name, setName] = useState("");
    // pegar o email do usuario
    const [email, setEmail] = useState("");
    // pegar a senha do usuario
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    // function para cadastrar usuario no banco de dados
    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel concluir o seu cadastro!");
            }
        })
    }

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
                onChange={e => setName(e.target.value)}
                />

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

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/"><FiArrowLeft/> Voltar para o login</Link>
            </Form>
            
            <Background/>
        </Container>
    );
}