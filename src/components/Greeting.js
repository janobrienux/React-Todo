import React from "react";

export class Greeting extends React.Component {
  state = {
    hour: null,
    username: "January",
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour,
    });
  };

  render() {
    const { hour, username } = this.state;
    return (
      <div className="App">
        <h2 style={styles.greeting}>{hour < 12 ? `Good Morning ${username}` : `Good evening ${username}`}</h2>
      </div>
    );
  }
}
export default Greeting;

const styles = {
  greeting:{
    color:"#6B4E71"
  }
}