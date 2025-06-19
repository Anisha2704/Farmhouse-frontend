import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ContactPage from './pages/Contact'
import About from './pages/About'
import Blogs from './pages/Blogs'

const App = () => {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element = {<Home />} /> 
      <Route path='/about' element = {<About />} />
      <Route path='/blogs' element = {<Blogs />} />
      <Route path='/contact' element = {<ContactPage/>} />
      {/* <Route path='/gallery' element = {} />
      <Route path='/contact' element = {} />
      <Route path='/menu' element = {} />
      <Route path='/bookings' element = {} /> */}
    </Routes>
    <Footer />
  </Router>
  )
}

export default App