import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { useApi } from "../../hooks/useApi";

export const World = () => {

    const { news, getApiBySection } = useApi()

    useEffect(() => {
        getApiBySection('world')
    }, [])

    return (
        <div className="container">

            <Card news={news} />
            <Loading />
        </div>
    );
}