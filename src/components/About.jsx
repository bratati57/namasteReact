import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
// import User from "./User"
import React from "react";
// import UserContext from "../utils/UserContext"

class About extends React.Component {
  constructor() {
    super()
    console.log("==parent constructor");
  }
   componentDidMount() {
    //API calls made here
    this.timer=setInterval(()=>{
        console.log("set interval 1 sec")
    },[1000])
    console.log("==parent component did mount");
  }
  componentDidUpdate() {
    console.log("==parent component did update");
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("==parent unmounted")
  }
  render() {
    console.log("==parent render");
    return (
      <div className="m-2 p-1">
        <h1 className="font-black">PeTook</h1>
        <h2  className="font-black m-2 p-1">
          This is a food ordering App built while learning from Namaste React
          Course
        </h2>
        <UserContext.Consumer>

           {({loggedInUser, setUser})=>(
            <h2  className="font-black m-2 p-1">{loggedInUser}</h2>)}
          {/* {({loggedInUser, setUser})=>(<div><span className="m-4 p-5 bg-amber-400" onClick={()=>{setUser("heera")}}/>
            <h2  className="font-black m-2 p-1">{loggedInUser}</h2></div>)} */}
        </UserContext.Consumer>
        {/* <User name="Bratati" from="Agartala"/> */}
        <UserClass name="Bratati Class" from="Agartala class" />
      </div>
    );
  }
}
export default About;