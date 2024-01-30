import { BrowserRouter,Routes, Route } from "react-router-dom";
import Policy from './Pages/Policy'
import Contact from './Pages/Contact'
import './App.css';
import Hero from './components/PageHero'
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter> 
        {<Hero />}
        {<NavBar />}
        <Routes>
          <Route exact path="/" index element={<Main />} />
          <Route path="policy" element={<Policy />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {<Footer />}
        </BrowserRouter> 
  );
}

export default App;
