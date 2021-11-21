import { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { useApi } from "../../hooks/useApi";
import { useAuth } from "../../hooks/useAuth";

export const Politics = () => {

    const { news, getApiBySection } = useApi() 
    const { user, signInWithGoogle } = useAuth()

    useEffect(() => {
        (async () => {
            if (!user){
                await signInWithGoogle()
            }
            getApiBySection('politics')
        })()
    }, [])

    return (
        <div className="container">

            <Card news={news}/>
            <Loading />
        </div>
    );
}