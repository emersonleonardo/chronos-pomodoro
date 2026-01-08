import './styles/theme.css'
import './styles/global.css'

import { Header } from './components/Header'
import Footer from './components/Footer'
import Timer from './components/Timer'

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Timer />
      <Footer />
    </div>
  )
}
