import { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import api from '../../services/api';
import { useApi } from '../../hooks/useApi';

export const Home = () => {

    const { news, setNews, apiKey } = useApi()
    console.log(news)

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/home.json?api-key=${apiKey}`)
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