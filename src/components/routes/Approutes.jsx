import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import AboutMe from '../ProductPage/AboutMe';
import TestimonialSlider from '../Home/Testimonials';
import ProductShowcase from '../ProductPage/PropertyShowcase';
import ContactPage from '../../pages/ContactPage';
import FAQSection from '../common/FAQSection';
import CertificatesPage from '../../pages/CertificatesPage';
import OurMission from '../../pages/OurMission';
import OurVisioin from '../../pages/OurVisioin';
import CompanyGallery from '../Home/CompanyGallery';
import JewelryPortfolioPage from '../../pages/PortfolioPage';
import ProductGrid from '../ProductPage/ProductGrid';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductGrid/>} />
    <Route
      path="/about"
      element={
        <>
          <AboutMe />
          <CompanyGallery />
          <TestimonialSlider />
        </>
      }
    />
    <Route path="/productShowcase" element={<ProductShowcase />} />
    <Route path="/contact" element={<><ContactPage />,<FAQSection /></>} />
    <Route path="/Certificates" element={<><CertificatesPage /></>} />
    <Route path="/ourmission" element={<><OurMission /></>} />
    <Route path="/ourvision" element={<><OurVisioin /></>} />
    <Route path='/portfolio' element={<JewelryPortfolioPage />} />
  </Routes>
);

export default AppRoutes;
