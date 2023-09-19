import axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  LineElement,
  Title,
  ChartOptions,
  LinearScale,
  PointElement,
  LineController,
  CategoryScale,
  registerables,
} from "chart.js";
import { MutableRefObject, RefObject } from "react";

const MyChart: React.FC = () => {
  const [ticker, setTicker] = useState<string>('AAPL')
  const [frame, setFrame] = useState<string | number>("D");
  const [myChart, setMyChart] = useState<Chart | null>(null);
  const [startPeriod, setStartPeriod] = useState<number>(Math.round(Date.now() / 1000 - 31622400));
  const [endPeriod, setEndPeriod] = useState<number>(Math.round(Date.now() / 1000));

  Chart.register(
    LineElement,
    Title,
    LineController,
    PointElement,
    LinearScale,
    CategoryScale,
    ...registerables
  );
  const chartRef: any = useRef<any>(null);

  useEffect(() => {
    let context = chartRef.current.getContext("2d");
    const createLineChart = (xData: number, yData: number) => {
      let data = {
        labels: xData,
        datasets: [
          {
            // label: `Котировки акций Apple в $ с ${new Date(startPeriod * 1000)} по ${endPeriod}`,
            label: '$',
            data: yData,
            pointStyle: false,
            fill: true,
            borderWidth: 1,
          },
        ],
      };
      let config: any = {
        type: "line",
        data: data,
        options: {
          scales: {
            x: {
              ticks: {
                autoSkip: true,
                maxRotation: 0,
                color: 'red',
              },
              border: {
                color: 'yellow',
              },
              grid: {
                color: 'orange'
              }
            },
            y: {

            }
          },
          plugins: {
            legend: {
              display: false,
            }
          }
        }
      };
      if (myChart) {
        myChart.destroy();
      }
      setMyChart(new Chart(context, config));
    };

    axios
      .get(
        `https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=${frame}&from=${startPeriod}&to=${endPeriod}&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg`
      )
      .then((response) => {
        console.log(response)
        let xData = response.data.t.map((el: any) =>
          new Date(el * 1000).toLocaleString()
        );
        let yData = response.data.h;
        createLineChart(xData, yData);
      });
  }, [frame, startPeriod, endPeriod, ticker]);

  return (
    <div className="chart">
      <input 
        type="text" 
        placeholder="Введите тикер"
        onChange={(event) => setTicker(event.target.value)}
      />
      <p>Установите начальное значение даты</p>
      <input
        type="date"
        onChange={(event) => {
          setStartPeriod(new Date(event.target.value).getTime() / 1000);
        }}
      />
      <p>Установите конечное значение даты</p>
      <input
        type="date"
        onChange={(event) => {
          setEndPeriod(new Date(event.target.value).getTime() / 1000);
        }}
      />
      <canvas ref={chartRef}></canvas>
      <div className="timeFrame">
        <button onClick={() => setFrame(1)}>1</button>
        <button onClick={() => setFrame(5)}>5</button>
        <button onClick={() => setFrame(15)}>15</button>
        <button onClick={() => setFrame(30)}>30</button>
        <button onClick={() => setFrame(60)}>60</button>
        <button onClick={() => setFrame("D")}>Д</button>
        <button onClick={() => setFrame("W")}>Н</button>
        <button onClick={() => setFrame("M")}>М</button>
      </div>
    </div>
  );
};

export default MyChart;