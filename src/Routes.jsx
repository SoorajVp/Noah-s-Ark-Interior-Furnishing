import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import ResourcesPage from './pages/resources';
import ContactPage from './pages/contact';
import About from './pages/about';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter basename="/noah-s-ark-interior">
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes >
        {/* Define your route here */}
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
