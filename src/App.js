import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import PageHero from './components/PageHero';
import Policy from './components/Policy';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About'
import Error from './components/Error'

function App() {
  return (


    <div className='App'>
      <BrowserRouter>
        {<PageHero />}
        {<Navbar />}

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/home' element={<Main />} />
          <Route exact path='/policy' element={<Policy />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      {<Footer />}
    </div>
  );
}

export default App;
