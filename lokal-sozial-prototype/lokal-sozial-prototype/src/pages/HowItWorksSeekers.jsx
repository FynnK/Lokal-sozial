import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Home, Users, MessageCircle, CheckCircle, ArrowRight, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HowItWorksSeekersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How It Works for <span className="text-orange-600">Room Seekers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find your perfect home and caring companion in just a few simple steps. 
            Join our community of young people who have found affordable housing and meaningful connections.
          </p>
          <Link to="/profile?type=seeker">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              <Home className="mr-2 h-5 w-5" />
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey in 3 Simple Steps</h2>
            <p className="text-xl text-gray-600">From profile creation to moving in with your new housemate</p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-4 rounded-full mr-4">
                    <span className="text-3xl font-bold text-orange-600">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Create Your Profile</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Tell us about yourself, your interests, lifestyle, and what you're looking for in a living situation. 
                  The more details you provide, the better we can match you with compatible room providers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Personal information and preferences</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Lifestyle habits and interests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Budget and location preferences</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">What you can offer to your housemate</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Profile Preview</CardTitle>
                    <CardDescription>What room providers will see</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-semibold">Maria, 23</p>
                          <p className="text-sm text-gray-600">University Student</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        "I'm a friendly psychology student looking for a warm home environment. 
                        I love cooking, reading, and would be happy to help with household tasks."
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Non-smoker</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Pet-friendly</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Quiet</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-4 rounded-full mr-4">
                    <span className="text-3xl font-bold text-orange-600">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Get Matched</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our intelligent matching system connects you with compatible room providers based on your preferences, 
                  lifestyle, and values. Browse through potential matches and see who might be your perfect housemate.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">AI-powered compatibility matching</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Detailed provider profiles with photos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Filter by location, budget, and preferences</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">See compatibility scores and reasons</span>
                  </div>
                </div>
              </div>
              <div className="md:order-1 bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Your Matches</h4>
                  <Card className="border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                            <Heart className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold">Frau Schmidt, 65</p>
                            <p className="text-sm text-gray-600">Retired Teacher</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold ml-1">95%</span>
                          </div>
                          <p className="text-xs text-gray-500">Match</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        "Looking for a respectful student to share my cozy home near the university."
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-green-600">€350/month</span>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 p-4 rounded-full mr-4">
                    <span className="text-3xl font-bold text-orange-600">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Meet & Move In</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Connect with your potential housemate through our secure messaging system, arrange a meeting, 
                  and if you both feel comfortable, start your new chapter together in a supportive living environment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Secure in-app messaging</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Video call scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Meet in person at your comfort</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Ongoing support from our team</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Home className="h-10 w-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Welcome Home!</h4>
                  <p className="text-gray-600 mb-4">
                    Start your new journey with a caring companion who will support you throughout your stay.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      "Moving in with Herr Weber was the best decision I made. 
                      I found not just affordable housing, but a mentor and friend."
                    </p>
                    <p className="text-xs text-gray-500 mt-2">- Tom, 24, Engineering Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lokal & Sozial?</h2>
            <p className="text-xl text-gray-600">More than just affordable housing</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-200">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-center text-orange-600">Affordable Living</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Save money on rent while living in comfortable, well-maintained homes with caring companions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-green-600">Meaningful Connections</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Build lasting relationships with older adults who can offer wisdom, support, and friendship.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-blue-600">Community Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Join a supportive community that helps you succeed in your studies and personal growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about finding a room</p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How much does it cost to use Lokal & Sozial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creating a profile and browsing matches is completely free. We only charge a small service fee 
                  once you successfully move in with a room provider, ensuring our interests are aligned with your success.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How are room providers verified?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All room providers undergo identity verification, background checks, and home inspections. 
                  We also collect references and reviews to ensure a safe and trustworthy community.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if I don't get along with my housemate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide ongoing support and mediation services. If needed, we'll help you find a new match 
                  at no additional cost. Our goal is your long-term happiness and success.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I visit the room before deciding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! We encourage meeting in person and visiting the room before making any commitments. 
                  This helps ensure both parties feel comfortable with the arrangement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of students and young professionals who have found their ideal living situation.
          </p>
          <Link to="/profile?type=seeker">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Home className="mr-2 h-5 w-5" />
              Create Your Profile Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

