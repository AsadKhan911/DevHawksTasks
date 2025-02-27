import Inventory from './pages/inventory'
import Game from './pages/in-game-visualizer'
import UploadGame from './pages/in-game-visualizer2'
import Campaign from './pages/cart'
import CampaignDetails from './pages/cart2'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Inventory />} />
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
