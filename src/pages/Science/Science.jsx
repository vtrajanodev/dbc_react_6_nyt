import { useEffect } from 'react/cjs/react.development';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import { useApi } from '../../hooks/useApi';
import api from '../../services/api';

export const Science = () => {

    const { news, setNews, apiKey, setLoading } = useApi()

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/science.json?api-key=${apiKey}`)
            const filteredDataResults = data.results.filter(e => e.multimedia !== null)
            setNews(filteredDataResults)
            setLoading(false)
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