import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import AboutMe from './pages/AboutMe'
import Photography from './pages/Photography'
import ContactMe from './pages/ContactMe'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />

        <secton className="main py-8">
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/about-me" element={<AboutMe />}/>
            <Route path="/photography" element={<Photography />}/>
            <Route path="/contact-me" element={<ContactMe />}/>
          </Routes>
        </secton>

        <Footer />
      </Router>
    </div>
  )
}

export default App
