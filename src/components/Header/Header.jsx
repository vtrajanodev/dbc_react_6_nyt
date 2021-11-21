import './Header.module.css'
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {

  const { user } = useAuth()

  return (
    <>
      {user && (
        <div className="container">
          <header>
            <div>
              Trending
            </div>

            <Navigation />
          </header>
        </div>
      )}
    </>
  );
}