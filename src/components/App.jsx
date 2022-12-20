import React from 'react'
import { Buttons } from './Buttons/Buttons'
import { Statistics } from './Statistics/Statistics'



export class App extends React.Component {
  state = {
    good: 0,
    bad: 0, 
    neutral: 0
  }

  changeGoodCounter = () => {
    this.setState({good: this.state.good+= 1})
  }
  changeBadCounter = () => {
    this.setState({bad: this.state.bad+= 1})
  }
  changeNeutralCounter = () => {
    this.setState({neutral: this.state.neutral+= 1})
  }
  render() {
  return <div>
    <h1>Please leave feedback</h1>
    <h1>Statistics</h1>
    <Statistics state={this.state}/>
    <Buttons addBadFeedback={this.changeBadCounter} 
    addNeutralFeedback={this.changeNeutralCounter} 
    addGoodFeedback={this.changeGoodCounter}/>
  </div>
  }
};
