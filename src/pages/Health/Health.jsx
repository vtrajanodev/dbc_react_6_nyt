import { useApi } from '../../hooks/useApi'
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import api from "../../services/api";

export const Health = () => {

    const { apiKey, setNews, news } = useApi() 

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/health.json?api-key=${apiKey}`)
            const filteredDataResults = data.results.filter(e => e.multimedia !== null)
            setNews(filteredDataResults)
        })()
    }, [])

    return (
        <div className="container">

            <h2>Notícias recentes</h2>
            <Card news={news}/>
            <Loading />
        </div>
    );
}