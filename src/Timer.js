import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etat: false,
      time: 0,
      s: 0,
      h: 0,
      m: 0,
      msa: 0
    };

    setInterval(() => {
      if (this.state.etat) {
        this.setState({
          time: this.state.time + 10
        });
      }
    }, 10);
  }

  Click = () => {
    this.setState({ etat: !this.state.etat });
  };

  Reset = () => {
    this.setState({
      etat: false,
      time: 0
    });
  };

  render() {
    let hours = Math.floor((this.state.time / 3600000) % 24);
    let minutes = Math.floor((this.state.time / 60000) % 60);
    let seconds = Math.floor((this.state.time / 1000) % 60);
    let ms = Math.floor(this.state.time % 1000);
    return (
      <div className="container">
        <div className="phone">
          <div className="te"></div>
          <div className="cadre">
            <p>
              <span>hour </span>
              <strong>{String(hours).padStart(2, "0")}</strong>
            </p>
            <p>
              <span>minute </span>
              <strong>{String(minutes).padStart(2, "0")}</strong>
            </p>
            <p>
              <span>second </span>
              <strong>{String(seconds).padStart(2, "0")}</strong>
            </p>
            <p>
              <span>ms </span>
              <strong>{String(ms).padStart(3, "0")}</strong>
            </p>
            <div>
              <button className="btn" onClick={this.Click}>
                {this.state.etat ? "Stop" : "Start"}
              </button>
              <button className="btn" onClick={this.Reset}>
                Reset
              </button>
            </div>
          </div>
          <div className="te te2"></div>
        </div>
      </div>
    );
  }
}

export default Timer;
