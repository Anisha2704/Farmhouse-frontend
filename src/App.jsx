import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ContactPage from './pages/Contact'

const App = () => {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element = {<Home />} /> 
      <Route path='/contact' element = {<ContactPage />} />
      {/* <Route path='/about' element = {} />
      <Route path='/gallery' element = {} />
      
      <Route path='/menu' element = {} />
      <Route path='/bookings' element = {} />
      <Route path='/blogs' element = {} /> */}
    </Routes>
    <Footer />
  </Router>
  )
}

export default App