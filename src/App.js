import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import './App.css'
import BakeryV1 from './components/BakeryV1/BakeryV1'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <BakeryV1/>
    </div>
  )
}

export default App