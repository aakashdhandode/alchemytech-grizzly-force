import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './compomnents/Home';
import About from './compomnents/About';
import { Footer } from './compomnents/footer/Footer';
import Header from './compomnents/header/Header';
import FindJob from './compomnents/FindJob';
import FindWarker from './compomnents/FindWarker';
import Resources from './compomnents/Resources';
import Login from './compomnents/Login';


function App() {
  return (
    <>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findJobs" element={<FindJob />} />
          <Route path="/findWorker" element={<FindWarker />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
