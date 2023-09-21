import axios from "axios";
import { useState, useEffect } from "react";
interface INews {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<INews[] | null>(null);

  useEffect(() => {
    axios
    .get(
      "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2023-09-18&to=2023-09-18&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg"
    )
    .then((resp) => {
      console.log(resp.data);
      setNews(resp.data);
    });
  }, [])
    
  return (
    <div className="news">
      {news && (
        <div className="news_area">
          {news.map((el: INews) => (
            <div id={el.id.toString()} className="news_area-new">
              <p>{el.category}</p>
              <p>{new Date(el.datetime * 1000).toLocaleString()}</p>
              <p>{el.headline}</p>
              <img src={el.image} alt="Хер а не фото" />
              <p>{el.related}</p>
              <p>{el.source}</p>
              <p>{el.summary}</p>
              <p>{el.url}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
