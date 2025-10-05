import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './pages/Navigation/Navigation'
import LandingPage from './pages/LandingPage/LandingPage'
import Rules from './pages/Rules/Rules'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<LandingPage />} />
            <Route path='rules' element={<Rules />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
