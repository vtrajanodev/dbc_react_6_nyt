import { MenuItem } from "../MenuItem/MenuItem";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <MenuItem itemName="Home" url="/home" />
                <MenuItem itemName="Ciência" url="/science" />
                <MenuItem itemName="Saude" url="/health" />
                <MenuItem itemName="Politica" url="/politics" />
                <MenuItem itemName="Mundo"url="/world" />
            </ul>
        </nav>
    );
}