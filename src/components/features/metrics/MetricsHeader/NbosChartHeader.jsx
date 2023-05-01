import React from 'react'
import { NbosChartControls } from './NbosChartControls'
import { NbosChartTitle } from './NbosChartTitle'

const NbosChartHeader = ({ handleClick, selectedChart }) => {
  return (
    <div className="tw-flex tw-items-center tw-p-3">
      <div className="tw-grow">
        <NbosChartTitle headerText="Patrick Barnes vs This Time Last Year" />
      </div>
      <NbosChartControls
        handleClick={handleClick}
        selectedChart={selectedChart}
      />
    </div>
  )
}

export default NbosChartHeader
