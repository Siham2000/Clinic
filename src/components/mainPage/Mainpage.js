import React from "react";
import ContactUs from "../contactUs/ContactUs";
import Doctor from "../doctor/Doctor";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HeaderCards from "../headerCards/HeaderCards";
import Services from "../ourServices/Services";
import ScrollToTop from "../scrollToTopBtn/ScrollToTop";
import Testimonials from "../testimonials/Testimonials";

const Mainpage = () => {
  return (
    <div>
      <Header />
      <HeaderCards />
      <Services />
      <Doctor />
      <Testimonials />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Mainpage;
