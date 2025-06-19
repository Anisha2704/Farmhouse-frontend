import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import Menu from './pages/Menu';


import Home from './pages/Home'
import ContactPage from './pages/Contact'

const App = () => {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element = {<Home />} /> 
      <Route path='/gallery' element = {<Gallery />} />
      <Route path='/bookings' element = {<Booking />} />
      <Route path='/contact' element = {<ContactPage />} />
       <Route path='/menu' element = {<Menu />} />
      {/* <Route path='/about' element = {} />
    
      <Route path='/blogs' element = {} /> */}
    </Routes>
    <Footer />
  </Router>
  )
}

export default App