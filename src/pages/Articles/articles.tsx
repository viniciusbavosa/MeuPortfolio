import { useEffect, useState } from "react";

interface articleData {
  canonical_url: string;
  type_of: string;
  title: string;
  published_at: string;
}
export function Articles() {
  const [articles, setArticles] = useState<articleData[]>([]);

  const title = "Meus artigos";
  const subtitle = "Da comunidade, para a comunidade";

  useEffect(() => {
    const devtoURI = "https://dev.to/api/articles?username=viniciusbavosa";

    const fetchAsync = async () => {
      const response = await fetch(devtoURI);
      const articleData: articleData[] = await response.json();
      setArticles(articleData);
    };

    fetchAsync();
  }, []);
  return (
    <>
      <section className="articles-section section-content-wrapper">
        <h1 className="section-title">{title}</h1>
        <h2 className="section-subtitle">{subtitle}</h2>
        <ul className="articles-list-wrapper">
          {articles.map((a, i) => (
            <li key={i} className="article-item">
              <article className="article-wrapper">
                <h1 className="article-title">
                  <a
                    href={a.canonical_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article-link"
                  >
                    {a.title}
                  </a>
                </h1>
                <span className="article-date">
                  Publicado em{" "}
                  {new Date(a.published_at).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                  })}
                </span>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
