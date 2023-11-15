import { Routes, Route } from "react-router-dom";
import "./App.css";
import Faq from "./pages/projects/Faq";
import TimeDashboard from "./pages/projects/TimeDashboard";
import ECommercePage from "./pages/projects/ECommercePage";
import PricingComponent from "./pages/projects/PricingComponent";
import ProfileCard from "./pages/projects/ProfileCard";
import SignUpForm from "./pages/projects/SignUpForm";
import SignUpFormJunior from "./pages/projects/SignUpFormJunior";
import SunnysideLP from "./pages/projects/SunnysideLP";
import TodoApp from "./pages/projects/TodoApp";
import SocialDashboard from "./pages/projects/SocialDashboard";
import UrlAPIpage from "./pages/projects/UrlAPIpage";
import AdviceApp from "./pages/projects/AdviceApp";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/projects/Faq" element={<Faq />} />
        <Route path="/pages/projects/AdviceApp" element={<AdviceApp />} />
        <Route
          path="/pages/projects/ECommercePage"
          element={<ECommercePage />}
        />
        <Route
          path="/pages/projects/PricingComponent"
          element={<PricingComponent />}
        />
        {/* <Route path="/pages/projects/ProfileCard" element={<ProfileCard />} /> */}
        <Route path="/pages/projects/SignUpForm" element={<SignUpForm />} />
        <Route
          path="/pages/projects/SignUpFormJunior"
          element={<SignUpFormJunior />}
        />
        <Route
          path="/pages/projects/TimeDashboard"
          element={<TimeDashboard />}
        />
        <Route path="/pages/projects/SunnysideLP" element={<SunnysideLP />} />
        <Route
          path="/pages/projects/SocialDashboard"
          element={<SocialDashboard />}
        />
        <Route path="/pages/projects/TodoApp" element={<TodoApp />} />
        <Route path="/pages/projects/UrlAPIpage" element={<UrlAPIpage />} />
      </Routes>
    </>
  );
}

export default App;
