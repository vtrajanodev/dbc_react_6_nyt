import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";

export const useApi = () => {
    const value = useContext(ApiContext)

    return value
}