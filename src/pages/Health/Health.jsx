import { useApi } from '../../hooks/useApi'
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";

export const Health = () => {

    const { news, getApiBySection } = useApi()

    useEffect(() => {
        getApiBySection('health')
    }, [])

    return (
        <div className="container">

            <Card news={news} />
            <Loading />
        </div>
    );
}