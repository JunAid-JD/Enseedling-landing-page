import { Route, Routes } from "react-router-dom";

// import { useState } from "react";
import Landing from "./components/Landing";
import CompanyRegistration from "./RegistrationComponent/CompanyRegistration";
import FundraisingRegistration from "./FundraisingComponent/FundraisingRegistration";
import MarketingRegistration from "./MarketingComponent/MarketingRegistration";
import SalesRegistration from "./SalesComponent/SalesRegistration";
import LegalRegistration from "./LegalComponent/LegalRegistration";
import AppRegistration from "./AppComponent/AppRegistration";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<CompanyRegistration />} />
        <Route path="/fundraising" element={<FundraisingRegistration />} />
        <Route path="/marketing" element={<MarketingRegistration />} />
        <Route path="/sales" element={<SalesRegistration />} />
        <Route path="/legal" element={<LegalRegistration />} />
        <Route path="/appdev" element={<AppRegistration />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
