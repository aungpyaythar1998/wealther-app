import { useStore } from "./store"
export default function Middle(){
    return(  <div className="h-3/6 w-full">
    <h1 className="h-1/6 w-full text-center">{useStore(state=>state.comfirmCity)}</h1>
    <div className="h-5/6 w-full grid grid-cols-2 grid-rows-2">
      <div className=" flex justify-center items-center flex-col">
      <img className="w-1/2 h-5/6 flex items-center justify-center" src={useStore(state=>state.today)} alt="Enter location"/>
      <div className="h-1/6 mb-3">Today</div>
      </div>
      <div className=" flex items-center justify-start">
      <div className="h-full w-1/2 flex justify-center">
      <svg className=" h-full w-full fill-blue-500" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M580.118-250Q601-250 615.5-264.618q14.5-14.617 14.5-35.5Q630-321 615.382-335.5q-14.617-14.5-35.5-14.5Q559-350 544.5-335.382q-14.5 14.617-14.5 35.5Q530-279 544.618-264.5q14.617 14.5 35.5 14.5ZM378-256l246-246-42-42-246 246 42 42Zm2.118-194Q401-450 415.5-464.618q14.5-14.617 14.5-35.5Q430-521 415.382-535.5q-14.617-14.5-35.5-14.5Q359-550 344.5-535.382q-14.5 14.617-14.5 35.5Q330-479 344.618-464.5q14.617 14.5 35.5 14.5ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Z"/></svg>
        </div>
        <div className="h-full w-1/2 flex items-start text-sm justify-center flex-col">
          <div className="sm:text-lg">{useStore(state=>state.humidity)}%</div>
          <div className=" sm:text-lg">Humidity</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mx-auto">
        <div className=" text-sm sm:text-base">condition: {useStore(state=>state.condition)}</div>
        <div className=" text-sm sm:text-base">avg temp: {useStore(state=>state.avgTemp)}&deg;C</div>
        <div className=" text-sm sm:text-base">min temp: {useStore(state=>state.minTemp)}&deg;C</div>
        <div className=" text-sm sm:text-base">max temp:  {useStore(state=>state.maxTemp)}&deg;C </div>
      </div>
      <div className=" flex">
        <div className="h-full w-1/2 flex justify-center">
          <img className="h-full" src={"http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png"} alt="" />
        </div>
        <div className="h-full w-1/2 flex items-start text-sm justify-center flex-col">
          <div className="sm:text-lg">{useStore(state=>state.wind)} km/h</div>
          <div className=" sm:text-lg">Wind speed</div>
        </div>
      </div>
    </div>
  </div>)
}