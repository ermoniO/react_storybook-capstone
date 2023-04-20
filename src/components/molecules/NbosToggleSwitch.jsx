// import React from 'react'

// const NbosToggleSwitch = () => {
//   return (
//     <div className="tw-p-10">
//       <span className=" tw-rounded-l-lg tw-text-blue-700 tw-border-l-2 tw-border-blue-600 tw-border-r-1 tw-border-y-2 tw-p-3 ">
//         NbosToggleSwitch Component
//       </span>
//       <span className=" tw-rounded-r-lg tw-text-blue-700 tw-border-l-1 tw-border-blue-600 tw-border-2 tw-border-y-2 tw-p-3">
//         NbosToggleSwitch Component
//       </span>
//     </div>
//   )
// }
// export default NbosToggleSwitch

import React from 'react'
import MuiToggleButton from '@mui/material/ToggleButton'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { NbosText } from 'components/atoms/NbosText'

export function NbosToggleSwitch() {
  const labels = [
    <NbosText text="Outcome Metrics" size="sm" color="blue" />,
    <NbosText text="Behavior Metrics" size="sm" color="blue" />,
  ]

  const ToggleButton = styled(MuiToggleButton)(() => ({
    border: `.25px solid #3568D6`,

    color: '#3568D6',

    uppercase: false,

    padding: '.5rem 2rem .5rem',

    borderRadius: '4px',

    '&.Mui-selected, &.Mui-selected:hover': {
      color: 'white',

      backgroundColor: '#3568D6',
    },
  }))
  return (
    <div>
      {' '}
      <ToggleButtonGroup>
        {labels.map(label => (
          <ToggleButton key={label} value={label}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  )
}
