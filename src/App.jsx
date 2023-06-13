
import Middle from "./Middle";
import Footer from "./Footer";
import { useStore } from "./store";
import { useEffect } from "react";
export default function App(){
  const city = useStore(state=>state.city);
  const comfirmCity = useStore(state=>state.comfirmCity)
  const setCity = useStore(state=>state.setCity);
  const setComfirmCity = useStore(state=>state.setComfirmCity);
  const setToday = useStore(state=>state.setToday);
  const setHumidity =useStore(state=>state.setHumidity);
  const setAvgTemp = useStore(state=>state.setAvgTemp);
  const setMinTemp = useStore(state=>state.setMinTemp);
  const setMaxTemp = useStore(state=>state.setMaxTemp);
  const setWind = useStore(state=>state.setWind);
  const setTomorrow = useStore(state=>state.setTomorrow)
  const setDayThree = useStore(state=>state.setDayThree);
  const setDayFour = useStore(state=>state.setDayFour);
  const setDayFive = useStore(state=>state.setDayFive);
  const setCondition = useStore(state=>state.setCondition)
  function handleOnKeyDown(e){
    if (e.key==="Enter"){
      setComfirmCity(e.target.value);
      setCity("")
    }
  }
  async function api(C){
    const res = await fetch(`https://api.shecodes.io/weather/v1/forecast?query=${C}&key=02fbae762905f6tcab78933b7f864oc3`);
    const data =await res.json();
    const x=data.daily;
    const today = x[0];
    const tomorrow=x[1];
    const dayThree=x[2];
    const dayFour=x[3];
    const dayFive=x[4];
    setCondition(today.condition.description)
    setToday(today.condition.icon_url);
    setAvgTemp(today.temperature.day);
    setMinTemp(today.temperature.minimum);
    setMaxTemp(today.temperature.maximum);
    setHumidity(today.temperature.humidity);
    setWind(today.wind.speed);
    setTomorrow(tomorrow.condition.icon_url);
    setDayThree(dayThree.condition.icon_url);
    setDayFour(dayFour.condition.icon_url);
    setDayFive(dayFive.condition.icon_url);
  }
  useEffect(()=>{
    api(comfirmCity)
  },[comfirmCity])
  return(
    <div className=" h-screen w-screen flex items-center flex-col mx-auto max-w-2xl" style={{ overflow: 'hidden' }}>
      <div className="h-1/6 w-full flex justify-center items-center">
        <input type="text" value={city} className="h-6 rounded-xl pl-4 w-2/3 max-w-md" placeholder="location" onChange={e=>setCity(e.target.value)} onKeyDown={handleOnKeyDown}/>
      </div>
      <Middle />
      <Footer />
    </div>
  )

}