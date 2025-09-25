import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/Home.jsx'
import HowItWorksSeekersPage from './pages/HowItWorksSeekers.jsx'
import HowItWorksProvidersPage from './pages/HowItWorksProviders.jsx'
import AboutPage from './pages/About.jsx'
import ContactPage from './pages/Contact.jsx'
import ProfilePage from './pages/Profile.jsx'
import MatchesPage from './pages/Matches.jsx'
import MessagesPage from './pages/Messages.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works-seekers" element={<HowItWorksSeekersPage />} />
          <Route path="/how-it-works-providers" element={<HowItWorksProvidersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

