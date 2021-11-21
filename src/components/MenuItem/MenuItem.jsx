import { Link } from "react-router-dom";

export const MenuItem = ({ itemName, url }) => {
    return (
        <>
            <li><Link to={url}>{itemName}</Link></li>
        </>
    );
}