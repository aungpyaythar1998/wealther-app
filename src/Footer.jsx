import { useStore } from "./store"
export default function Footer(){
    return(
        <div className=" h-2/6 w-full flex">
        <div className="h-full w-1/4">
        <img className=" footerimage" src={useStore(state=>state.tomorrow)} alt="Enter location"/>
        <div className="h-1/6 text-center w-full mb-20 text-sm">Tomorrow</div>
        </div>
        <div className="h-full w-1/4">
        <img className=" footerimage" src={useStore(state=>state.dayThree)} alt="Enter location"/>
        <div className="h-1/6 text-center w-full mb-20 text-sm">Day-3</div>
        </div>
        <div className="h-full w-1/4">
        <img className="footerimage" src={useStore(state=>state.dayFour)} alt="Enter location"/>
        <div className="h-1/6 text-center w-full mb-20 text-sm">Day-4</div>
        </div>
        <div className="h-full w-1/4">
        <img className="footerimage" src={useStore(state=>state.dayFive)} alt="Enter location"/>
        <div className="h-1/6 text-center w-full mb-20 text-sm">Day-5</div>
        </div>
      </div>
    )
}