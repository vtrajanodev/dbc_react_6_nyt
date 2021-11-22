import { Link, useResolvedPath, useMatch } from "react-router-dom";

export const MenuItem = ({ itemName, url }) => {

        let resolved = useResolvedPath(url)
        let match = useMatch({ path: resolved.pathname, end: true })
    
    return (
        <>
            <li><Link style={{ textDecoration: match ? "underline" : "none" }} to={url}>{itemName}</Link></li>
        </>
    );
}