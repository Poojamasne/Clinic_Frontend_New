import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/Home/Home";
import PageLayout from "../components/common/PageLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BookAppointment from "../pages/Appointment/BookAppointment";
import MessageConfirmation from "../pages/Contact/MessageConfirmation";
import Spine from "../pages/Treatments/Spine/Spine";
import GIT from "../pages/Treatments/GIT/GIT";
import Cosmetology from "../pages/Treatments/Cosmetology/Cosmetology";  
import KidneyTreatment from "../pages/Treatments/KidneyTreatment/KidneyTreatment";
import GynecologistTreatment from "../pages/Treatments/GynecologistTreatment/GynecologistTreatment";
import MigraineTreatment from "../pages/Treatments/MigraineTreatment/MigraineTreatment";
import ENTTreatments from "../pages/Treatments/ENTTreatments/ENTTreatments";
import JointTreatments from "../pages/Treatments/JointTreatments/JointTreatments";
import ChildTreatments from "../pages/Treatments/ChildTreatments/ChildTreatments";
import PaymentSuccess from "../pages/Payments/PaymentSuccess";
import PaymentFail from "../pages/Payments/PaymentFail";
import PaymentPage from "../pages/Payments/PaymentPage";
import AppointmentConfirmation from "../pages/Payments/AppointmentConfirmation";
import Terms from "../pages/Terms&Condition/Terms";
import PrivacyPolicy from "../pages/Privacy&Policy/Privacy";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
   
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null; 
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<BookAppointment />} />

          
          <Route path="/treatments">
            <Route path="spine" element={<Spine />} />
            <Route path="git" element={<GIT />} />
            <Route path="cosmetology" element={<Cosmetology />} />
            <Route path="spine-treatments" element={<Spine />} />
            <Route path="git-treatments" element={<GIT />} />
            <Route path="kidney-treatment" element={<KidneyTreatment />} />
            <Route
              path="gynecologist-treatment"
              element={<GynecologistTreatment />}
            />
            <Route path="migraine-treatment" element={<MigraineTreatment />} />
            <Route path="ent-treatments" element={<ENTTreatments />} />
            <Route path="joint-treatments" element={<JointTreatments />} />
            <Route path="child-treatments" element={<ChildTreatments />} />
          </Route>

          {/* Payment Pages */}
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/fail" element={<PaymentFail />} />
          <Route path="/payment/PaymentPage" element={<PaymentPage />} />

          <Route
            path="/payment/appointment-confirmation"
            element={<AppointmentConfirmation />}
          />
          <Route
            path="/contact/MessageConfirmation"
            element={<MessageConfirmation />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
