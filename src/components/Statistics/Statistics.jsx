import React from 'react'
import PropTypes from 'prop-types'
import { StatisticItem } from './StatisticItem'

export const Statistics = ({ state }) => {
    const stateArray = Object.entries(state);
    const feedbacksCount = state.good + state.bad + state.neutral
    return <div>
        {stateArray.map((ent) => {
            return <StatisticItem key={ent[0]} title={ent[0]} count={ent[1]} />
        })}
        <StatisticItem title='Total' count={feedbacksCount} />
        <StatisticItem title='Positive feedback in prosents'
            count={(feedbacksCount !== 0) ? Math.floor(100 / feedbacksCount * state.good) : 0} />

    </div>


}

Statistics.propTypes = {
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired
    })
}