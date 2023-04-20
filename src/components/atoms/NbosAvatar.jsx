import Avatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'

import React from 'react'

const NbosAvatar = ({ variant, url, size, src }) => {
  return (
    <div>
      <Avatar
        src={url}
        alt="avatar image"
        variant={variant}
        sx={{ width: size, height: size }}
      />
    </div>
  )
}

NbosAvatar.propTypes = {
  variant: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.number,
}

NbosAvatar.defaultProps = {
  variant: 'solid',
  size: 60,
}

export default NbosAvatar
