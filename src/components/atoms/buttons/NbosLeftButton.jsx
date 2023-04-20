import { NbosText } from '../NbosText'
import PropTypes from 'prop-types'

const NbosLeftButton = ({ children }) => {
  return (
    <div>
      <button className="tw-border-2 tw- tw-p-2 tw-border-blue-600 tw-rounded-l-lg">
        {' '}
        {children}
      </button>
    </div>
  )
}

NbosLeftButton.propTypes = {
  children: PropTypes.node.isRequired,
}
export default NbosLeftButton
