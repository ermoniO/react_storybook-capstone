import { NbosIcon } from '../atoms/NbosIcon'
import { NbosText } from '../atoms/NbosText'

export const NbosCard = () => {
  return (
    <>
      <div className="tw-p-5">
        <span className="tw-border-2 tw-drop-shadow-lg tw-p-5">
          <NbosText text="Text Input Here" size="2xl" />
        </span>
      </div>
      {/* <NbosIcon />  */}
    </>
  )
}

NbosCard.propTypes = {}

NbosCard.defaultProps = {}
