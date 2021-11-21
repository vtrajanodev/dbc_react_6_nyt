import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    let value = useContext(AuthContext)

    return value
}