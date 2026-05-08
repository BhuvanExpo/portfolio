import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebsitesPage from './pages/WebsitesPage';
import JourneyPage from './pages/JourneyPage';
import { Dock, DockIcon } from './components/magicui/Dock';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-inter selection:bg-white selection:text-black relative overflow-x-hidden">

        {/* CONTENT LAYER */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <main className="flex-1 w-full flex flex-col items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/websites" element={<WebsitesPage />} />
              <Route path="/journey" element={<JourneyPage />} />
            </Routes>
          </main>

          {/* Dynamic Island Dock: Stays fixed at bottom */}
          <Dock>
            <DockIcon>
              <a href="https://github.com/BhuvanExpo" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://www.linkedin.com/in/bhuvanexpo" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </DockIcon>
            <DockIcon>
              <a href="mailto:bhuvanexpo@gmail.com" title="Email">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://www.instagram.com/mr_unwanted_97" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </DockIcon>
          </Dock>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;