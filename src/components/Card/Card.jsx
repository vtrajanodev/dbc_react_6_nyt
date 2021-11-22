import { useAuth } from "../../hooks/useAuth";
import styles from './Card.module.css'

export const Card = ({ news }) => {

  const { user } = useAuth()
  return (
    <>
      <div>
        {user && (
          <div className={styles.userInfo}>
            <>
              <h2>Olá, {user.name}</h2>
            </>
            <>
              <img src={user.avatar} alt="foto perfil" />
            </>
          </div>
        )}
      </div>

      <ul>
        {news.map((notice, index) => (
          <li key={index}>
            <div className="mainContainer">
              <div>
                <img src={notice.multimedia[0].url} width="400" height="267" alt="Imagem da notícia" />
              </div>
              <div>
                <div className="noticeTitle">
                  <h2>{notice.title}</h2>
                  <span>{notice.byline}</span>
                </div>
                <div>
                  <p>{notice.abstract}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}