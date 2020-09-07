import React, {Component} from 'react'

class Countdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 3,
      show: true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    var that = this;
    var hours = new Date().getHours()
    if (hours > 12){
      hours = hours - 12
    }
    if (hours < 10){
      hours = "0" + hours
    }
    var min = new Date().getMinutes()
    if (min < 10){
      min = "0" + min
    }
    var sec = new Date().getSeconds()
    if (sec < 10){
      sec = "0" + sec
    }
    if (hours > 12){
      var format = "PM"
    } else {
      format = "AM"
    }
    that.setState({
      date:
        hours + ':' + min + ':' + sec + " " + format,
    })
  }

  componentDidUpdate(){
    if (this.state.show == true){
      if (this.state.time === 0){
          this.componentWillUnmount()
          this.delete()
      }
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  delete() {
    this.setState({
      show: false
    })
  }
  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }

  render(){
    return(
      <>
        {this.state.show && (
          <>
          <h1 style={{textAlign: "center"}}>
            Sekarang Jam : {this.state.date}
          </h1>
          <h1 style={{textAlign: "center"}}>
            Hitung Mundur :  {this.state.time}
          </h1>
          </>
        )}
      </>
    )
  }
}

export default Countdown