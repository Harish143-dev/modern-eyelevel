import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import WhatsAppButton from "./components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ServicesPage from "./pages/Services";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import EduMarketing from "./pages/EduMarketing";
import SportsMarketing from "./pages/SportsMarketing";
import RealEstateMarketing from "./pages/RealEstateMarketing";
import B2BMarketing from "./pages/B2BMarketing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Booking from "./pages/Booking";
import Apply from "./pages/Apply";
import JobDetails from "./pages/JobDetails";
import ThankYou from "./pages/ThankYou";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/how-we-work"
            element={<Navigate to="/about" replace />}
          />
          <Route path="/industries" element={<Industries />} />
          {/* <Route path="/industries/education" element={<EduMarketing />} /> */}
          {/* <Route path="/industries/sports" element={<SportsMarketing />} /> */}
          {/* <Route
            path="/industries/real-estate"
            element={<RealEstateMarketing />}
          /> */}
          {/* <Route path="/industries/b2b" element={<B2BMarketing />} /> */}
          {/* <Route path="/industries/:slug" element={<IndustryDetail />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/careers/:slug" element={<JobDetails />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
