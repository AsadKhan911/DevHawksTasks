// import Inventory from './pages/inventory'
import Game from './pages/in-game-visualizer'
import UploadGame from './pages/in-game-visualizer2'
import Campaign from './pages/cart'
import CampaignDetails from './pages/cart2'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Auth/Login'
import StarterScreen from './pages/Auth/StarterScreen';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import EnterResetPassword from './pages/Auth/EnterResetPassword';
import PasswordResetSuccess from './pages/Auth/PasswordResetSuccess';
import EnterCode from './pages/Auth/EnterCode';



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StarterScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/forgot-password" element={<ForgotPassword />} />
          <Route path="/login/forgot-password/reset-password" element={<ResetPassword />} />
          <Route path="/login/forgot-password/reset-password/enter-code" element={<EnterCode />} />
          <Route path="/login/forgot-password/reset-password/enter-code/enter-password" element={<EnterResetPassword />} />
          <Route path="/login/forgot-password/reset-password/enter-code/enter-password/success" element={<PasswordResetSuccess />} />
          {/* <Route path="/" element={<Inventory />} /> */}
          <Route path="/dashboard" element={<Game />} />
          <Route path="/upload-game" element={<UploadGame />} />
          <Route path="/campaigns" element={<Campaign />} />
          <Route path="/campaign-details" element={<CampaignDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
