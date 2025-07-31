import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/diseño/Header';
import Footer from './components/diseño/Footer';
import ChatAssistant from './components/chat/chat';
import InicioPage from './pages/InicioPage';
import AhorrosPage from './pages/AhorrosPage';
import InversionPage from './pages/InversionPage';
import PlanesFuturosPage from './pages/PlanesFuturosPage';
import RecursosPage from './pages/RecursosPage';
import ComunidadPage from './pages/ComunidadPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/savings" element={<AhorrosPage />} />
        <Route path="/investing" element={<InversionPage />} />
        <Route path="/future-plans" element={<PlanesFuturosPage />} />
        <Route path="/resources" element={<RecursosPage />} />
        <Route path="/community" element={<ComunidadPage />} />
      </Routes>
      <Footer />
      <ChatAssistant />
    </Router>
  );
}

export default App;
