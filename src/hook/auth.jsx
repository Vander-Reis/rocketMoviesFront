import { createContext, useContext, useState, useEffect} from 'react';

import { api } from '../service/api';

export const AuthContext = createContext({});

function AuthProvider({children}) {

    const [data, setData ] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/session", {email, password});

            const { user, token } = response.data;

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token});

        } catch(error) {
            if(error.message) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }
        }

    }

    function signOut() {
        localStorage.removeItem("@rocketMovies:token");
        localStorage.removeItem("@rocketMovies:user");
        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketMovies:token");
        const user = localStorage.getItem("@rocketMovies:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, [])

    return(
        <AuthContext.Provider
        value={
            {
                signIn,
                user: data.user,
                signOut
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);    

    return context;
}

export {
    AuthProvider,
    useAuth,
}