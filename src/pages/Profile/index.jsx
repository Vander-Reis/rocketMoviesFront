import { useState } from 'react';
import { useAuth } from '../../hook/auth'
import { Container, Form, Avatar } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../service/api';

import {FiArrowLeft , FiMail, FiLock , FiUser, FiCamera} from 'react-icons/fi';

export function Profile() {

    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    async function handleUpdate() {
        const updated = {
            name, 
            email, 
            password: newPassword,
            oldpassword: oldPassword,
        };

        const userUpdated = Object.assign(user, updated);

        await updateProfile({user: userUpdated, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);    

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    function handleBack(){
        navigate(-1);
    }

    return(
        <Container>
            <header>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                </button>
            </header>

            <Form>

                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        
                        <input type="file" id="avatar" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
                
                <Input
                type="text"
                placeholder="User"
                value={name}
                icon={FiUser}
                onChange={(e) => setName(e.target.value)}
                />

                <Input
                type="text"
                placeholder="E-mail"
                value={email}
                icon={FiMail}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                type="password"
                placeholder="Senha atual"
                icon={FiLock}
                onChange={(e) => setOldPassword(e.target.value)}
                />

                <Input
                type="password"
                placeholder="Nova senha"
                icon={FiLock}
                onChange={(e) => setNewPassword(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    );
}