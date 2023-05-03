import React from 'react'

const NbosBarChartButton = () => {
  return (
    <div className="tw-flex tw-grow">
      <button className="tw-px-8 tw-m-0 tw-bg-blue-700 tw-border-blue-700 tw-text-white tw-rounded-l-lg tw-grow">
        All
      </button>

      <button className="tw-border-2 tw-p-2 tw-m-0 tw-border-blue-700 tw-text-blue-700 tw-px-8 tw-grow">
        Credit
      </button>

      <button className="tw-border-2 tw-p-2 tw-m-0 tw-border-blue-700 tw-text-blue-700 tw-px-8 tw-grow">
        Deposit
      </button>

      <button className="tw-border-2 tw-p-2 tw-m-0 tw-border-blue-700 tw-text-blue-700 tw-px-8 tw-grow">
        Capital Markets
      </button>

      <button className="tw-border-2 tw-p-2 tw-m-0 tw-border-blue-700 tw-text-blue-700 tw-px-8 tw-grow">
        Treasury Management
      </button>

      <button className="tw-border-2 tw-p-2 tw-m-0 tw-rounded-r-lg tw-border-blue-700 tw-text-blue-700 tw-px-8 tw-grow">
        Other
      </button>
    </div>
  )
}

export default NbosBarChartButton
