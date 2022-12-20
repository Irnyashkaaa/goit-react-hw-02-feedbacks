import React from 'react'
import PropTypes from 'prop-types'
import s from './Statistic.module.css'

export const StatisticItem = ({title, count}) => {
    return <div className={s.item}>
        <div className={s.title}>{title}: </div>
        <div className={s.count}> {count}</div>
    </div>
}

StatisticItem.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}

