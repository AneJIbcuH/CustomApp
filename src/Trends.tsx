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

const Trends: React.FC = () => {
    const [chartTrends, setchartTrends] = useState<Chart | null>(null);
    const trendsRef: any = useRef<any>(null)
// let context = canvas.getContext('2d');

// const createLineChart = (xDataBuy, xDataHold, xDataSell, xDataStrongBuy, xDataStrongSell, yData) => {
//       let data = {
//         labels: yData,
//         datasets: [
//           {
//           label: 'Срочно покупать',
//           data: xDataStrongBuy,
//           backgroundColor: 'green',
//           },
//           {
//           label: 'Покупать',
//           data: xDataBuy,
//           backgroundColor: 'lightgreen',
//           // pointStyle: false,
//           // fill: true,
//           // borderWidth: 3
//         },
//         {
//           label: 'Держать',
//           data: xDataHold,
//           backgroundColor: 'yellow',
//         },
//         {
//           label: 'Продавать',
//           data: xDataSell,
//           backgroundColor: 'pink',
//         },
        
//         {
//           label: 'Срочно продавать',
//           data: xDataStrongSell,
//           backgroundColor: 'red',
//         }]
//       }
//       let options = {
//         legend: {
//           display: false
//         },
//         title: {
//           display: true,
//           text: 'тоси боси'
//         }
//       }
//       let config = {
//         type: 'bar',
//         data: data,
//         options: options
//       }
//       let chart = new Chart(context, config);
//     }
// function go() {
//         axios.get('https://finnhub.io/api/v1/stock/recommendation?symbol=AAPL&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg')
//       .then((response)=>{
//           console.log(response.data)
//           let yData = response.data.map(el => el.period).reverse()
//           let xDataBuy = response.data.map(el => el.buy)
//           let xDataHold = response.data.map(el => el.hold)
//           let xDataSell = response.data.map(el => el.sell)
//           let xDataStrongBuy = response.data.map(el => el.strongBuy)
//           let xDataStrongSell = response.data.map(el => el.strongSell)

//         createLineChart(xDataBuy, xDataHold, xDataSell, xDataStrongBuy, xDataStrongSell, yData);
//       });
//     }

    useEffect(() => {
        let context = trendsRef.current.getContext("2d");
        const createLineChart = (xDataBuy: number, xDataHold: number, xDataSell: number, xDataStrongBuy: number, xDataStrongSell: number, yData: string) => {
          let data = {
            labels: yData,
            datasets: [
                {
                    label: 'Срочно покупать',
                    data: xDataStrongBuy,
                    backgroundColor: 'green',
                    },
                    {
                    label: 'Покупать',
                    data: xDataBuy,
                    backgroundColor: 'lightgreen',
                    // pointStyle: false,
                    // fill: true,
                    // borderWidth: 3
                  },
                  {
                    label: 'Держать',
                    data: xDataHold,
                    backgroundColor: 'yellow',
                  },
                  {
                    label: 'Продавать',
                    data: xDataSell,
                    backgroundColor: 'pink',
                  },
                  
                  {
                    label: 'Срочно продавать',
                    data: xDataStrongSell,
                    backgroundColor: 'red',
                  }
            ],
          };
          let config: any = {
            type: "bar",
            data: data,
            // options: {
            //   scales: {
            //     x: {
            //       ticks: {
            //         autoSkip: true,
            //         maxRotation: 0,
            //         color: 'red',
            //       },
            //       border: {
            //         color: 'yellow',
            //       },
            //       grid: {
            //         color: 'orange'
            //       }
            //     },
            //     y: {
    
            //     }
            //   },
            //   plugins: {
            //     legend: {
            //       display: false,
            //     }
            //   }
            // }
          };
          if (chartTrends) {
            chartTrends.destroy();
          }
          setchartTrends(new Chart(context, config));
        };
    
        axios.get('https://finnhub.io/api/v1/stock/recommendation?symbol=AAPL&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg')
      .then((response)=>{
          console.log(response.data)
          let yData = response.data.map((el: any) => el.period).reverse()
          let xDataBuy = response.data.map((el: any) => el.buy)
          let xDataHold = response.data.map((el: any) => el.hold)
          let xDataSell = response.data.map((el: any) => el.sell)
          let xDataStrongBuy = response.data.map((el: any) => el.strongBuy)
          let xDataStrongSell = response.data.map((el: any) => el.strongSell)

        createLineChart(xDataBuy, xDataHold, xDataSell, xDataStrongBuy, xDataStrongSell, yData);
      });

      }, []);




    return (
        <canvas ref={trendsRef}></canvas>
    )
}

export default Trends