import React from "react";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="task-card">
        <img src={this.props.link} alt="Plesant" />
        <div>{this.props.title}</div>
      </div>
    );
  }
}
export default App;
