import React from 'react'
import { Buttons } from './Buttons/Buttons'
import { Statistics } from './Statistics/Statistics'
import { Section } from './Section'

export class App extends React.Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0
  }

  changeGoodCounter = () => {
    this.setState({ good: this.state.good += 1 })
  }
  changeBadCounter = () => {
    this.setState({ bad: this.state.bad += 1 })
  }
  changeNeutralCounter = () => {
    this.setState({ neutral: this.state.neutral += 1 })
  }
  render() {
    return <div>
      <Section title={'Please leave feedback'}></Section>
      {this.state.bad + this.state.good + this.state.neutral > 0 ?
        <div>
          <Section title="Statistics" />
          <Statistics state={this.state} />
        </div>
        : <Section title='No feedbacks given' />

      }

      <Buttons addBadFeedback={this.changeBadCounter}
        addNeutralFeedback={this.changeNeutralCounter}
        addGoodFeedback={this.changeGoodCounter} />
    </div>
  }
};
