import { NbosOutcomeMetrics } from './NbosOutcomeMetrics'
import NbosChartHeader from './MetricsHeader/NbosChartHeader'
import { NbosBehaviorMetrics } from './NbosBehaviorMetrics'
import { useState } from 'react'

export const NbosMetrics = () => {
  const [selectedChart, setSelectedChart] = useState('outcome')

  const handleClick = () => {
    if (selectedChart === 'outcome') {
      setSelectedChart('behavior')
    } else {
      setSelectedChart('outcome')
    }
  }
  return (
    <div className="tw-drop-shadow-xl">
      <NbosChartHeader
        handleClick={handleClick}
        selectedChart={selectedChart}
      />
      {selectedChart === 'outcome' ? (
        <NbosOutcomeMetrics />
      ) : (
        <NbosBehaviorMetrics />
      )}
    </div>
  )
}
