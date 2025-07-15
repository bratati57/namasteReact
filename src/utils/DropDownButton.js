import {useState} from "react"
const DropDownButton=()=>{
    const options=[1,2,3,4,5,6,7,8,9,10]
    const [showOption,setShowOption]= useState(true)
    console.log(showOption)
    return (
      <div className="flex">
        <div className="cursor-pointer align-middle justify-center w-7 h-7 m-0.5 bg-amber-950 text-white rounded-lg">
          -
        </div>
        <div className="align-middle justify-center w-7 h-7 m-0.5 p-0.5 text-black border border-black rounded-lg bg-amber-200 text-sm">67</div>
        <div className="cursor-pointer align-middle justify-center w-7 h-7 m-0.5 bg-amber-950 text-white rounded-lg">
          +
        </div>
      </div>
    );
}
export default DropDownButton