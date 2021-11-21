import { useEffect } from 'react/cjs/react.development';
import { Card } from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
import { useApi } from '../../hooks/useApi';
import { useAuth } from '../../hooks/useAuth';

export const Science = () => {

    const { news, getApiBySection } = useApi() 
    const { user, signInWithGoogle } = useAuth()

    useEffect(() => {
        (async () => {
            if (!user){
                await signInWithGoogle()
            }
            getApiBySection('science')
        })()
    }, [])

    return (
        <div className="container">

            <Card news={news}/>
            <Loading />
        </div>
    );
}