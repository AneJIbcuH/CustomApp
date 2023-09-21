import axios from "axios";
import { useState, useEffect } from "react";

const Share: React.FC = () => {
  const [data, setData] = useState<any>("");
  const [data1, setData1] = useState<any>("");

  useEffect(() => {
    axios
      .get(
        "https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg"
      )
      .then((resp) => {
        setData(resp.data);
      });
    axios
      .get(
        "https://finnhub.io/api/v1/quote?symbol=AAPL&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg"
      )
      .then((resp) => {
        setData1(resp.data);
      });
  }, [])

  return (
    <div className="share">
      <h1>Share info</h1>

      {data && (
        <div>
          <p>{data.name}</p>
          <p>Сайт: {data.weburl}</p>
          <p>Связать по номеру телефона: {Math.round(data.phone)}</p>
          <img src={data.logo} alt="" />
          <p>
            Капитализация: {Math.round(data.marketCapitalization / 1000)} млрд.$
          </p>
          <p>Акций в обращении: {Math.round(data.shareOutstanding)} млн.</p>
          <p>Дата IPO: {data.ipo}</p>
          <hr />
          <p>Текущая цена за акцию: {data1.c}$</p>
          <p>Изменение цены с предыдущим днем: {data1.d}$</p>
          <p>Изменение цены с предыдущим днем: {data1.dp}%</p>
          <p>Максимальная цена акции за день: {data1.h}$</p>
          <p>Минимальная цена акции за день: {data1.l}$</p>
          <p>Цена акции на открытии: {data1.o}$</p>
          <p>Цена акции на закрытии прошлого дня: {data1.pc}$</p>
        </div>
      )}
    </div>
  );
};

export default Share;
