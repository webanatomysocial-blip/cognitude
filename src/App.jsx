import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import CognitionRedefined from './components/CognitionRedefined/CognitionRedefined';
import CreativeEngineering from './components/CreativeEngineering/CreativeEngineering';
import WorkWith from './components/WorkWith/WorkWith';
import ThoughtLeadership from './components/ThoughtLeadership/ThoughtLeadership';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import BlogPage from './pages/BlogPage/BlogPage';
import LegalPage from './pages/LegalPage/LegalPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const Home = () => (
  <>
    <Hero />
    <Expertise />
    <CognitionRedefined />
    <CreativeEngineering />
    <WorkWith />
    <ThoughtLeadership />
    <CTA />
  </>
);

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initial check for hash
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        // Wait a bit for components to mount/render
        setTimeout(() => {
          lenis.scrollTo(target);
        }, 100);
      }
    }

    return () => {
      lenis.destroy();
    };
  }, [pathname, hash]); // Re-initialize or check on route/hash change

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="/legal/:slug" element={<LegalPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
