import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import {FiArrowLeft , FiMail, FiLock , FiUser, FiCamera} from 'react-icons/fi';

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/Vander-Reis.png" alt="" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                
                <Input
                type="text"
                placeholder="User"
                icon={FiUser}
                />

                <Input
                type="text"
                placeholder="E-mail"
                icon={FiMail}
                />

                <Input
                type="password"
                placeholder="Senha atual"
                icon={FiLock}
                />

                <Input
                type="password"
                placeholder="Nova senha"
                icon={FiLock}
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    );
}