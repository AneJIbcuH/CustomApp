import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [ip, setIp] = useState<any>()
  const [city, setCity] = useState<any>()
  const [weather, setWeather] = useState<any>()

  useEffect(() => {
      axios
        .get("https://api.ipify.org?format=json")
        .then((resp) => {
        // console.log(resp.data);
        setIp(resp.data.ip)
      });

      axios
        .get(`https://ipinfo.io/${ip}?token=f0254e572c43ee`)
        .then((resp)=>{
          // console.log(resp.data.city)
          setCity(resp.data.city)
      })

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fe6a245b977754770c24f7fb45c3004f`)
        .then(resp => {
          // console.log(resp.data)
          setWeather(resp.data)
      }) 
  }, [ip])

  // useEffect(() => {
  //   axios
  //     .get(`https://ipinfo.io/${ip}?token=f0254e572c43ee`)
  //     .then((resp)=>{
  //       console.log(resp)
  //       setGeo(resp)
  //   })
  // }, [ip])


  

  return (
    <div>
      {ip && (
            <p>Вычислил твой IP {ip}!</p>
        )}
      {city && (
            <p>Вычислил тебя по IP, ты в городе: {city}</p>
      )}
      {weather && (
            <p>Вычислил тебя по IP, ты в городе: {}</p>
      )}
    </div>
  );
}

export default Home;
