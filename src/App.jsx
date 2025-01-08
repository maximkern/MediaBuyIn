import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DigitalPresence from "./pages/DigitalPresence";
import MediaInventories from "./pages/MediaInventories";
import CampaignSupport from "./pages/CampaignSupport";
import RequirementsPartnership from "./pages/RequirementsPartnership";
import InvestorsCorner from "./pages/InvestorsCorner";
import SEO from "./pages/SEO";

function App() {
  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/digital-presence" element={<DigitalPresence />} />
            <Route path="/media-inventories" element={<MediaInventories />} />
            <Route path="/campaign-support" element={<CampaignSupport />} />
            <Route path="/requirements-partnership" element={<RequirementsPartnership />} />
            <Route path="/investors-corner" element={<InvestorsCorner />} />
            <Route path="/seo" element={<SEO />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;