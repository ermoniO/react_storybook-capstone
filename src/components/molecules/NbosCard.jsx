import { NbosIcon } from '../atoms/NbosIcon'
import { NbosText } from '../atoms/NbosText'

export const NbosCard = () => {
  return (
    <>
      <div>
        <span>NbosCard Component</span>
      </div>
      <NbosIcon />
      <NbosText text="Hello" size="2xl" bold={true} />
    </>
  )
}

NbosCard.propTypes = {}

NbosCard.defaultProps = {}
