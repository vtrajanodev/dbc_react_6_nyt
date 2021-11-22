import { useEffect } from 'react';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import { useApi } from '../../hooks/useApi';
import { useAuth } from '../../hooks/useAuth';

export const Home = () => {

    const { news, getApiBySection } = useApi()
    useEffect(() => {
        getApiBySection('home')
    }, [])

    return (
        <div className="container">

            <Card news={news} />
            <Loading />
        </div>
    );
}