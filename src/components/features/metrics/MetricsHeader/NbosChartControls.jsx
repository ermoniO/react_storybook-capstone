import React from 'react'
import NbosButton from '../../../atoms/NbosButton'

export const NbosChartControls = ({ handleClick, selectedChart }) => {
  return (
    <>
      <NbosButton handleClick={handleClick} selectedChart={selectedChart} />
    </>
  )
}
