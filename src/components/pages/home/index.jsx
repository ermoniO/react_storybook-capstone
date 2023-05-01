import logo from './logo.svg'
import { Counter } from '../../features/counter/Counter'
import { NbosHighcharts } from '../../molecules/NbosHighcharts'
import './style.css'
import { Link } from 'react-router-dom'
import { NbosMetrics } from 'components/features/metrics/NbosMetrics'

export function HomePage() {
  return (
    <div className="App">
      <NbosMetrics />
    </div>
  )
}
