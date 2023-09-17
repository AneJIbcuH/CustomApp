import axios from "axios";
import { useState } from "react";

function Currency() {
  const [currency, setCurrency] = useState();
  function getaxios(): void {
    axios
    .get("https://open.er-api.com/v6/latest/USD")
    .then((response) => {
      setCurrency(response.data.rates);
      console.log(response.data.rates);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
        <button onClick={getaxios}>click</button>
        <p>tosibosi</p>
        {currency && (
            <div className="currency">
                {/* {Object.entries(currency).map(el => <div>{el[0]}-{el[1]}</div>)} */}
                <p>{Object.keys(currency)}</p>
                <p>{Object.values(currency)}</p>
            </div>
        )}
    </div>
  )   
}

export default Currency;

// const APIkey: string = "cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg"
// const headers = {
//     "X-Finnhub-Secret": "cjsv2mpr01qgcbapfhkg"
// }

//     axios
//         .get("https://finnhub.io/api/v1/global-filings/filter?field=sources&token=cjsv2mpr01qgcbapfhj0cjsv2mpr01qgcbapfhjg", {headers})
//         .then((response) => {
//         console.log(response.data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
