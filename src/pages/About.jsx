import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Users, Target, Award, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-amber-50 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Lokal</span> & <span className="text-green-600">Sozial</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're on a mission to combat loneliness, foster intergenerational bonds, and create meaningful 
            connections that enrich lives across generations.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">1,000+</p>
                  <p className="text-gray-600">Successful Matches</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-gray-600">Cities Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Lokal & Sozial was founded on the belief that meaningful connections across generations can solve 
                two critical challenges of our time: the housing crisis for young people and social isolation among older adults.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We create a platform where older individuals with spare rooms can welcome young people seeking affordable housing, 
                fostering relationships that provide mutual support, companionship, and enrichment for both generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Combat loneliness and social isolation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Provide affordable housing solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Foster intergenerational understanding</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Build stronger, more connected communities</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-green-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  A world where every generation supports each other, where no one lives in isolation, 
                  and where housing is accessible through the power of human connection.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 italic">
                    "We envision communities where wisdom meets energy, where experience guides ambition, 
                    and where every home becomes a bridge between generations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600">How Lokal & Sozial came to be</p>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              The idea for Lokal & Sozial was born from a simple observation: while young people struggle to find 
              affordable housing in Germany's major cities, many older adults live alone in homes with empty rooms, 
              longing for companionship and connection.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our founders, inspired by successful intergenerational housing programs in the Netherlands and France, 
              recognized that this wasn't just about solving a housing problem—it was about addressing a deeper social issue. 
              In an increasingly disconnected world, we saw an opportunity to bring people together in meaningful ways.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What started as a small pilot program in Berlin has grown into a nationwide movement. We've learned that 
              when different generations share space, magic happens. Young people gain not just affordable housing, 
              but mentorship, wisdom, and a sense of belonging. Older adults rediscover joy, purpose, and the energy 
              that comes from intergenerational connection.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Lokal & Sozial is more than a housing platform—we're a community of people who believe in the 
              power of human connection to solve society's challenges. Every match we make is a step toward a more 
              connected, compassionate world.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-orange-200">
              <CardHeader>
                <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We build trust through transparency, verification, and genuine care for every member of our community.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in the power of community to support, nurture, and enrich the lives of all our members.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Respect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We honor the dignity, wisdom, and unique contributions of every generation in our community.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardHeader>
                <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide ongoing support to ensure every relationship thrives and every member feels valued.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Making a difference, one connection at a time</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-2xl mb-4">
                <p className="text-4xl font-bold text-orange-600">1,000+</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Successful Matches</h3>
              <p className="text-gray-600">Young people and older adults living together harmoniously</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-2xl mb-4">
                <p className="text-4xl font-bold text-green-600">€2.5M</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Housing Savings</h3>
              <p className="text-gray-600">Total amount saved by young people on housing costs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-2xl mb-4">
                <p className="text-4xl font-bold text-blue-600">95%</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Rate</h3>
              <p className="text-gray-600">Of participants report improved quality of life</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-2xl mb-4">
                <p className="text-4xl font-bold text-purple-600">50+</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cities</h3>
              <p className="text-gray-600">Across Germany where we've facilitated connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals working to connect generations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-700">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Anna Schmidt</h3>
                <p className="text-gray-600 mb-3">Co-Founder & CEO</p>
                <p className="text-sm text-gray-600">
                  Former social worker with 15 years of experience in community building and intergenerational programs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-200 to-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">MK</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Klein</h3>
                <p className="text-gray-600 mb-3">Co-Founder & CTO</p>
                <p className="text-sm text-gray-600">
                  Technology leader passionate about using tech for social good, with expertise in matching algorithms.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-700">LM</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lisa Müller</h3>
                <p className="text-gray-600 mb-3">Head of Community</p>
                <p className="text-sm text-gray-600">
                  Community specialist focused on ensuring positive experiences for all members of our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Be part of the movement that's connecting generations and building stronger communities across Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile?type=seeker">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Find a Room
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/profile?type=provider">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
                <Heart className="mr-2 h-5 w-5" />
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

