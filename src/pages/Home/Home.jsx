import { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import { useApi } from '../../hooks/useApi';

export const Home = () => {

    const { news, getApiBySection } = useApi() 

    useEffect(() => {
        getApiBySection('home')
    }, [])

    return (
        <div className="container">

            <h2>Notícias recentes</h2>
            <Card news={news}/>
            <Loading />
        </div>
    );
}