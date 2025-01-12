import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './components/pages/home'
import { EditPage } from './components/pages/edit'
import { DashboardPage } from './components/pages/dashboard'
import { store } from './store'
import { Provider } from 'react-redux'
import './styles/index.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditPage />} />
        {/* <Route path="/edit" element={< />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App
