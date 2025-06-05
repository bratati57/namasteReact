import UserClass from "./UserClass";
// import User from "./User"
import React from "react";

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
      <div>
        <h1>PeTook</h1>
        <h2>
          This is a food ordering App built while learning from Namaste React
          Course
        </h2>
        {/* <User name="Bratati" from="Agartala"/> */}
        <UserClass name="Bratati Class" from="Agartala class" />
      </div>
    );
  }
}
export default About;