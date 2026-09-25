import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/common/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Consultancy from './pages/Consultancy';
import Training from './pages/Training';
import DigitalAI from './pages/DigitalAI';
import Insights from './pages/Insights';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="consultancy" element={<Consultancy />} />
            <Route path="training" element={<Training />} />
            <Route path="digital-ai" element={<DigitalAI />} />
            <Route path="insights" element={<Insights />} />
            <Route path="insights/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            {/* Other routes will go here */}
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;