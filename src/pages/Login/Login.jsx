import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.module.css'

export const Login = () => {

    const { signInWithGoogle } = useContext(AuthContext)

    const handleLogin = async () => {
        await signInWithGoogle()
    }


    return (
        <div className={styles.loginContainer}>
            <h3>Faça login com sua conta do google</h3>
            <button onClick={handleLogin}>Clicando aqui</button>
        </div>
    );
}