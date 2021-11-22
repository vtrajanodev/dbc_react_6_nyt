import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Login.module.css'

export const Login = () => {

    let navigate = useNavigate()
    const { signInWithGoogle } = useAuth()

    const handleLogin = async () => {
        await signInWithGoogle()
        navigate('/home')
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginField}>
                <h1>Olá :)</h1>
                <h3>Faça login com sua conta do google</h3>
                <button className={styles.loginButton} onClick={handleLogin}>Clicando aqui</button>

                <button className={styles.buttonLogin} onClick={() => navigate('/home')}>Acesso sem login</button>
            </div>
        </div>
    );
}