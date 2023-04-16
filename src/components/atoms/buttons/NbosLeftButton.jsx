import { NbosText } from '../NbosText'

const NbosLeftButton = () => {
  return (
    <div>
      <button className="tw-border-2 tw- tw-p-2 tw-border-blue-600 tw-rounded-l-lg">
        {' '}
        <NbosText size="xl" text="Button" color="#003EFF" />
      </button>
    </div>
  )
}

export default NbosLeftButton
