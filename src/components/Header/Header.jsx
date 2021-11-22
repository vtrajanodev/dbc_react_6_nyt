import styles from './Header.module.css'
import { Navigation } from '../Navigation/Navigation';
import { useResolvedPath, useMatch, useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {

  let resolved = useResolvedPath('/login')
  let match = useMatch({ path: resolved.pathname, end: true })

  let navigate = useNavigate()

  const { signOutFromSession } = useAuth()

  const logout = async () => {
    await signOutFromSession()
    navigate('/login')
  }

  return (
    <>
      {!match && (
        <div className="container">
          <header>
            <button className={styles.logout} onClick={logout}>
              Logout
            </button>
            <Navigation />
          </header>
        </div>
      )}
    </>
  );
}