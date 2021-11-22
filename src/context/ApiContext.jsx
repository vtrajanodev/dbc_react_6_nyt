import { createContext, useState } from "react";
import { useAuth } from '../hooks/useAuth'
import api from '../services/api'

export const ApiContext = createContext()

export const ApiContextProvider = ({ children }) => {

    const { user, signInWithGoogle } = useAuth()

    const apiKey = '4p8takOZOMFfwAA5GPObho7fJxmmtyto'

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    const getApiBySection = async section => {

        const { data } = await api.get(`/${section}.json?api-key=${apiKey}`)
        const filteredData = data.results.filter(e => e.multimedia !== null)
        setNews(filteredData)
        setLoading(false)
    }

    return (
        <ApiContext.Provider value={{ news, loading, getApiBySection}}>
            {children}
        </ApiContext.Provider>
    );
}