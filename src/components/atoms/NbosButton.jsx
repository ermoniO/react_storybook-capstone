import React from 'react'
import cx from 'classnames'

const NbosButton = ({ handleClick, selectedChart }) => {
  return (
    <div className="tw-inline-block">
      <button
        // style={{
        // color: selectedChart === 'outcome' ? 'white' : 'black',
        // backgroundColor: selectedChart === 'outcome' ? 'blue' : 'white',
        // }}
        onClick={handleClick}
        className={cx({
          'tw-border-blue-700 tw-border-2 tw-p-2 tw-m-0 tw-rounded-l-lg tw-px-8': true,
          'tw-bg-blue-700 tw-text-white': selectedChart === 'outcome',
        })}
      >
        Outcome Metrics
      </button>
      <button
        // style={{
        //   color: selectedChart === 'behavior' ? 'white' : 'black',
        //   backgroundColor: selectedChart === 'behavior' ? 'blue' : 'white',
        // }}
        onClick={handleClick}
        // Destructred function
        // Accepts args and return a string
        className={cx({
          ' tw-border-blue-700 tw-border-2 tw-p-2 tw-m-0 tw-text-white-700 tw-rounded-r-lg tw-px-8': true,
          'tw-bg-blue-700 tw-text-white': selectedChart === 'behavior',
        })}
      >
        Behavior Metrics
      </button>
    </div>
  )
}

export default NbosButton
