import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPost from "./pages/BlogPost";
import Booking from "./pages/Booking";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import RealEstate from "./pages/industries/RealEstate";
import ITSaaS from "./pages/industries/ITSaaS";
import Healthcare from "./pages/industries/Healthcare";
import Automotive from "./pages/industries/Automotive";
import ManufacturingB2B from "./pages/industries/ManufacturingB2B";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import Privacy from "./pages/Privacy";
import ServicesPage from "./pages/Services";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import Works from "./pages/Works";
import WhatsappMarketing from "./pages/WhatsappMarketing";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import AiEraSeo from "./pages/AiEraSeo";
import SocialMediaManagement from "./pages/SocialMediaManagement";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about-us" element={<Navigate to="/about" replace />} />
    <Route path="/about" element={<About />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/services/whatsapp-marketing" element={<WhatsappMarketing />} />
    <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
    <Route path="/services/ai-era-seo" element={<AiEraSeo />} />
    <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
    <Route path="/works" element={<Navigate to="/work" replace />} />
    <Route path="/work" element={<Works />} />
    <Route path="/how-we-work" element={<Navigate to="/about" replace />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/industries/real-estate" element={<RealEstate />} />
    <Route path="/industries/it-saas" element={<ITSaaS />} />
    <Route path="/industries/healthcare" element={<Healthcare />} />
    <Route path="/industries/automotive" element={<Automotive />} />
    <Route path="/industries/manufacturing-b2b" element={<ManufacturingB2B />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/apply" element={<Apply />} />
    <Route
      path="/careers/head-of-creative--strategy"
      element={<Navigate to="/careers/head-of-creative-strategy" replace />}
    />
    <Route
      path="/careers/visualizer--senior-graphic-designer"
      element={
        <Navigate to="/careers/visualizer-senior-graphic-designer" replace />
      }
    />
    <Route
      path="/careers/django--devops-engineer"
      element={<Navigate to="/careers/django-devops-engineer" replace />}
    />
    <Route path="/careers/:slug" element={<JobDetails />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route
      path="/terms-and-conditions"
      element={<Navigate to="/terms-and-condition" replace />}
    />
    <Route path="/terms-and-condition" element={<Terms />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
