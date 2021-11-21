import { useAuth } from "../../hooks/useAuth";

export const Card = ({ news }) => {

  const { user } = useAuth()
  return (
    <ul>
      {user && (
        <h2>Noticias recentes</h2>
      )}
      {news.map((notice, index) => (
        <>

          <li key={index}>
            <div className="mainContainer">
              <div>
                <img src={notice.multimedia[0].url} width="400  " alt="Imagem da notícia" />
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
        </>
      ))}
    </ul>
  );
}