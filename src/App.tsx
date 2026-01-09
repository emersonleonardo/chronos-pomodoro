import './styles/theme.css'
import './styles/global.css'

import { Header } from './components/Header'
import Footer from './components/Footer'
import Timer from './components/Timer'
import Form from './components/Form'
import Cycles from './components/Cycles'

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Timer />
      <Form />
      <Cycles />
      <Footer />
    </div>
  )
}
