import loadingGif from '../../assets/Spinner.svg'
import { useApi } from '../../hooks/useApi';
import styles from './Loading.module.css'

export const Loading = () => {

  const { loading } = useApi()

  return (

    <>
      {loading && (
        <div className={styles.loadingContainer}>
          <img src={loadingGif} alt="loading..." className={styles.loader} />
        </div>
      )}

    </>
  );
}