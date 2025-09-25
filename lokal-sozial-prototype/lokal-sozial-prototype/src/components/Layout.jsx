import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">Lokal & Sozial</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/how-it-works-seekers" 
                className={`transition-colors ${
                  location.pathname.includes('how-it-works') 
                    ? 'text-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                How It Works
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  location.pathname === '/about' 
                    ? 'text-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  location.pathname === '/contact' 
                    ? 'text-orange-600' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Contact
              </Link>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Sign In
              </Button>
              <Link to="/profile">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold">Lokal & Sozial</span>
              </div>
              <p className="text-gray-400">
                Connecting generations, creating homes, building stronger communities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/how-it-works-seekers" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: hello@lokalsozial.de</p>
                <p>Phone: +49 (0) 30 12345678</p>
                <p>Address: Musterstraße 123<br />10115 Berlin, Germany</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lokal & Sozial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

