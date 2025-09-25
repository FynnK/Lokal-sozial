import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Home, Users, MessageCircle, CheckCircle, ArrowRight, Heart, Star, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HowItWorksProvidersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How It Works for <span className="text-green-600">Room Providers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome a caring companion into your home and enjoy the benefits of intergenerational living. 
            Share your space, gain support, and build meaningful relationships.
          </p>
          <Link to="/profile?type=provider">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Start Hosting
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
            <p className="text-xl text-gray-600">From listing your room to welcoming your new housemate</p>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <span className="text-3xl font-bold text-green-600">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Create Your Profile</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Describe your home, your lifestyle, and what kind of companion you'd like to welcome. 
                  Share what makes your home special and what you can offer to a young person.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Home description with photos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Your interests and lifestyle</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Expectations and house rules</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">What support you can provide</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-2xl">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-600">Profile Preview</CardTitle>
                    <CardDescription>What room seekers will see</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                          <Heart className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold">Frau Schmidt, 65</p>
                          <p className="text-sm text-gray-600">Retired Teacher</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        "I have a cozy room available in my home near the university. 
                        I love gardening, reading, and would enjoy sharing meals and conversations."
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Garden access</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Kitchen use</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Pet-friendly</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-green-600">€350/month</span>
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
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <span className="text-3xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Review Matches</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Browse profiles of potential tenants who match your preferences and values. 
                  Our system shows you compatible young people who would be a good fit for your home and lifestyle.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Curated matches based on compatibility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Detailed seeker profiles with references</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Background checks and verification</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">You choose who to connect with</span>
                  </div>
                </div>
              </div>
              <div className="md:order-1 bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Potential Matches</h4>
                  <Card className="border-orange-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-semibold">Maria, 23</p>
                            <p className="text-sm text-gray-600">Psychology Student</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold ml-1">92%</span>
                          </div>
                          <p className="text-xs text-gray-500">Match</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        "Quiet, respectful student who loves cooking and helping around the house."
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-semibold">Tom, 24</p>
                            <p className="text-sm text-gray-600">Engineering Student</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold ml-1">88%</span>
                          </div>
                          <p className="text-xs text-gray-500">Match</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        "Tech-savvy student who can help with computers and enjoys gardening."
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Connect
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
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <span className="text-3xl font-bold text-green-600">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Find Mutual Support</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Welcome your new housemate and enjoy the companionship and support they bring. 
                  Build a meaningful relationship that benefits both of you in this intergenerational living arrangement.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Secure messaging and video calls</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Meet in person before deciding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Flexible trial periods</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Ongoing support and mediation</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Welcome Your New Companion!</h4>
                  <p className="text-gray-600 mb-4">
                    Enjoy the benefits of having a caring, respectful young person share your home.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                      "Having Maria live with me has brought so much joy to my daily life. 
                      She helps me with technology, and I help her with German cooking!"
                    </p>
                    <p className="text-xs text-gray-500 mt-2">- Herr Weber, 67, Retired Teacher</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Hosting</h2>
            <p className="text-xl text-gray-600">More than just extra income</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-center text-green-600">Companionship</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Reduce loneliness and enjoy meaningful conversations with a caring young person who becomes like family.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-center text-blue-600">Light Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Get help with household tasks, technology, shopping, and other daily activities from your housemate.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-center text-purple-600">Security & Independence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Feel safer with someone trustworthy in your home while maintaining your independence and privacy.
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
            <p className="text-xl text-gray-600">Everything you need to know about hosting</p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How much rent should I charge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We help you set a fair rent based on your location, room size, and included amenities. 
                  Most rooms range from €250-€500 per month, typically 20-30% below market rate in exchange for companionship.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How are room seekers screened?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All room seekers undergo comprehensive background checks, identity verification, and reference checks. 
                  We also conduct interviews to ensure they're a good fit for intergenerational living.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What if the arrangement doesn't work out?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer mediation services and support throughout the arrangement. If needed, we'll help you find 
                  a new match. Most arrangements include a trial period to ensure compatibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do I need to provide meals?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Meal arrangements are flexible and up to you. Some hosts enjoy sharing meals, while others prefer 
                  separate cooking. This is discussed and agreed upon before the arrangement begins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide ongoing support including regular check-ins, mediation services, legal guidance, 
                  and a 24/7 helpline for any concerns or questions that arise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Welcome a New Companion?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of room providers who have enriched their lives through intergenerational living.
          </p>
          <Link to="/profile?type=provider">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Create Your Listing Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

