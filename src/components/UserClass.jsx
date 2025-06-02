import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0,
        count2:2,
    }
  }
  render() {
    const {name, from}=this.props;
    const {count}=this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            this.setState({count:this.state.count+1})
        }}>Increase Count</button>
        <h1>{name}</h1>
        <h2>{from}</h2>
        <h3>bratati7878@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
