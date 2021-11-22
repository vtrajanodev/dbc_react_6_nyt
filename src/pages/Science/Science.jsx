import { useEffect } from 'react/cjs/react.development';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import { useApi } from '../../hooks/useApi';

export const Science = () => {

    const { news, getApiBySection } = useApi()

    useEffect(() => {
        getApiBySection('science')
    }, [])

    return (
        <div className="container">

            <Card news={news} />
            <Loading />
        </div>
    );
}