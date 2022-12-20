import React from 'react'
import PropTypes from 'prop-types'
import s from './Buttons.module.css'

export const Buttons = ({addGoodFeedback, addBadFeedback, addNeutralFeedback}) => {
    return <div>
        <button className={s.button} onClick={addGoodFeedback}>GOOD</button>
        <button className={s.button} onClick={addBadFeedback}>BAD</button>
        <button className={s.button} onClick={addNeutralFeedback}>NEUTRAL</button>
    </div>
}

Buttons.propTypes = {
    addGoodFeedback: PropTypes.func.isRequired,
    addBadFeedback: PropTypes.func.isRequired,
    addNeutralFeedback: PropTypes.func.isRequired
}