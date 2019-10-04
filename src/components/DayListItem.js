import React from 'react'
import './DayListItem.scss'
import classNames from 'classnames'

export default function DayListItem(props) {
  const dayListItemClassName = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  })
  function formatSpots() {
    let spotsMessage = ''
    if (props.spots === 0) {
      spotsMessage = 'no spots remaining'
    } else if (props.spots === 1) {
      spotsMessage = '1 spot remaining'
    } else {
      spotsMessage = `${props.spots} spots remaining`
    }
    return spotsMessage
  }
  return (
    <li
      className={dayListItemClassName}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  )
}
