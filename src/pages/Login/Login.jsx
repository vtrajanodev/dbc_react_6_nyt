import { useNavigate } from 'react-router';
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
            <h3>Faça login com sua conta do google</h3>
            <button onClick={handleLogin}>Clicando aqui</button>
        </div>
    );
}