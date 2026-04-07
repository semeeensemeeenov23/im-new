import { BrowserRouter as Router } from 'react-router-dom'  // ← ДОБАВИТЬ ЭТУ СТРОКУ
import HomePage from './pages/HomePage'
import FloatingGifs from './components/FloatingGifs'

function App() {
  return (
    <Router basename="/im-new">
      <HomePage />
      <FloatingGifs />
    </Router>
  )
}

export default App