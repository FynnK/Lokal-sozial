import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Home, Users, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('seekers')

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Lokal & Sozial:<br />
            <span className="text-orange-600">Connecting Generations,</span><br />
            <span className="text-green-600">Creating Homes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bringing together older individuals with spare rooms and younger people seeking affordable housing. 
            Foster community, mutual support, and meaningful intergenerational connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/profile?type=seeker">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                <Home className="mr-2 h-5 w-5" />
                Find a Room
              </Button>
            </Link>
            <Link to="/profile?type=provider">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Offer a Room
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits for Everyone
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Home className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">For Room Seekers</h3>
                    <p className="text-gray-600">Affordable housing, community support, and a home away from home with caring companions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">For Room Providers</h3>
                    <p className="text-gray-600">Companionship, light household help, security, and the joy of staying independent in your own home.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">For Community</h3>
                    <p className="text-gray-600">Stronger intergenerational bonds, reduced loneliness, and vibrant local communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-green-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Community</h3>
                <p className="text-gray-600 mb-4">Over 1,000 successful matches across Germany</p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">4.8/5 average satisfaction rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to find your perfect match</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('seekers')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'seekers'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Room Seekers
              </button>
              <button
                onClick={() => setActiveTab('providers')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'providers'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Room Providers
              </button>
            </div>
          </div>

          {activeTab === 'seekers' && (
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-orange-200">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">1</span>
                  </div>
                  <CardTitle className="text-orange-600">Create Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tell us about yourself, your interests, and what you're looking for in a living situation.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-orange-200">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">2</span>
                  </div>
                  <CardTitle className="text-orange-600">Get Matched</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Our system connects you with compatible room providers based on your preferences and lifestyle.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-orange-200">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">3</span>
                  </div>
                  <CardTitle className="text-orange-600">Meet & Move In</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Meet your potential housemate, discuss expectations, and start your new chapter together.</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'providers' && (
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-green-200">
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <CardTitle className="text-green-600">Create Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Describe your home, your lifestyle, and what kind of companion you'd like to welcome.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-green-200">
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <CardTitle className="text-green-600">Review Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Browse profiles of potential tenants who match your preferences and values.</p>
                </CardContent>
              </Card>
              <Card className="text-center border-green-200">
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <CardTitle className="text-green-600">Find Mutual Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Welcome your new housemate and enjoy the companionship and support they bring.</p>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center mt-8">
            <Link to="/how-it-works-seekers">
              <Button className="bg-orange-600 hover:bg-orange-700 mr-4">
                Learn More for Seekers
              </Button>
            </Link>
            <Link to="/how-it-works-providers">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Learn More for Providers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our community members</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-2 rounded-full mr-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Maria, 23</h4>
                    <p className="text-sm text-gray-600">Student, Room Seeker</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Living with Frau Schmidt has been amazing. Not only do I have affordable housing, 
                  but I've gained a grandmother figure who helps me with everything from cooking to life advice."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Herr Weber, 67</h4>
                    <p className="text-sm text-gray-600">Retired Teacher, Room Provider</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Having Tom live with me has brought so much joy to my daily life. 
                  He helps with technology, and I help him with his German. It's a perfect exchange!"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted & Secure</h2>
            <p className="text-xl text-gray-600">Your safety and privacy are our top priorities</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Profiles</h3>
              <p className="text-gray-600">All users undergo identity verification for your peace of mind.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Partners</h3>
              <p className="text-gray-600">Partnered with local communities and social organizations.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our team is always here to help with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of people who have found their perfect living situation through Lokal & Sozial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile?type=seeker">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Home className="mr-2 h-5 w-5" />
                Find a Room
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile?type=provider">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Offer a Room
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

