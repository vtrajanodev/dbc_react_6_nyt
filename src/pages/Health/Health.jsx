import { useApi } from '../../hooks/useApi'
import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { useAuth } from '../../hooks/useAuth';

export const Health = () => {

    const { news, getApiBySection } = useApi() 
    const { user, signInWithGoogle } = useAuth()

    useEffect(() => {
        (async () => {
            if (!user){
                await signInWithGoogle()
            }
            getApiBySection('health')
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