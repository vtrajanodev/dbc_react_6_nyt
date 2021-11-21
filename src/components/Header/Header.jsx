import './Header.module.css'
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {

    return (
        <div className="container">
            <header>
                <div>
                    Trending
                </div>
            
               <Navigation />
            </header>
        </div>
    );
}