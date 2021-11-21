import { createContext, useState} from "react";


export const ApiContext = createContext()

export const ApiContextProvider = ({ children }) => {

    const apiKey = '4p8takOZOMFfwAA5GPObho7fJxmmtyto'

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <ApiContext.Provider value={{ news, setNews, apiKey, loading, setLoading  }}>
            {children}
        </ApiContext.Provider>
    );
}