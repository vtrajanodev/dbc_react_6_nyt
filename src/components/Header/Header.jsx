import './Header.module.css'
import { Navigation } from '../Navigation/Navigation';
import { useResolvedPath, useMatch } from 'react-router';

export const Header = () => {

  let resolved = useResolvedPath('/login')
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <>
      {!match && (
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