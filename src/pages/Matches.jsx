import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Users, MessageCircle, Star, MapPin, Euro, Calendar, Filter, Search } from 'lucide-react'
import { Input } from '@/components/ui/input.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'

export default function MatchesPage() {
  const [selectedMatch, setSelectedMatch] = useState(null)
  const [messageText, setMessageText] = useState('')

  // Mock data for matches
  const matches = [
    {
      id: 1,
      name: 'Frau Schmidt',
      age: 65,
      occupation: 'Retired Teacher',
      location: 'Berlin Mitte',
      rent: 350,
      compatibility: 95,
      photo: 'FS',
      description: 'Looking for a respectful student to share my cozy home near the university. I love gardening and reading.',
      amenities: ['Garden access', 'Kitchen use', 'Pet-friendly', 'Near university'],
      interests: ['Reading', 'Gardening', 'Cooking', 'Languages'],
      verified: true,
      available: 'Immediately'
    },
    {
      id: 2,
      name: 'Herr Weber',
      age: 67,
      occupation: 'Retired Engineer',
      location: 'Berlin Charlottenburg',
      rent: 400,
      compatibility: 88,
      photo: 'HW',
      description: 'Tech-savvy retiree looking for a young person who can help with modern technology while I share my life experience.',
      amenities: ['Home office', 'Parking', 'Balcony', 'High-speed internet'],
      interests: ['Technology', 'History', 'Chess', 'Classical music'],
      verified: true,
      available: 'From next month'
    },
    {
      id: 3,
      name: 'Frau Müller',
      age: 72,
      occupation: 'Retired Nurse',
      location: 'Berlin Prenzlauer Berg',
      rent: 320,
      compatibility: 92,
      photo: 'FM',
      description: 'Warm and caring person looking for a student who appreciates home-cooked meals and meaningful conversations.',
      amenities: ['Shared meals', 'Laundry', 'Central location', 'Quiet neighborhood'],
      interests: ['Cooking', 'Knitting', 'Movies', 'Walking'],
      verified: true,
      available: 'In 2 weeks'
    }
  ]

  const handleSendMessage = (matchId) => {
    alert(`Message sent to ${matches.find(m => m.id === matchId)?.name}!`)
    setMessageText('')
    setSelectedMatch(null)
  }

  return (
    <>
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Matches</h1>
            <p className="text-xl text-gray-600 mb-6">
              We found {matches.length} compatible room providers based on your preferences
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search by location or name..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by rent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-300">€0 - €300</SelectItem>
                  <SelectItem value="300-400">€300 - €400</SelectItem>
                  <SelectItem value="400-500">€400 - €500</SelectItem>
                  <SelectItem value="500+">€500+</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Matches Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {matches.map((match) => (
              <Card key={match.id} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-orange-700">{match.photo}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{match.name}, {match.age}</h3>
                        <p className="text-sm text-gray-600">{match.occupation}</p>
                      </div>
                    </div>
                    {match.verified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{match.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold">{match.compatibility}%</span>
                      <span className="text-xs text-gray-500 ml-1">match</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{match.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Euro className="h-4 w-4 mr-1" />
                        <span className="text-sm font-semibold">€{match.rent}/month</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-xs">{match.available}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {match.amenities.slice(0, 3).map((amenity, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {match.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{match.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-orange-600 hover:bg-orange-700"
                      onClick={() => setSelectedMatch(match)}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="border-orange-600 text-orange-600">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Message Modal */}
      {selectedMatch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Send Message to {selectedMatch.name}</CardTitle>
              <CardDescription>
                Start a conversation with your potential housemate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Suggested message:</strong> Hi {selectedMatch.name}! I saw your profile and think we might be a great match. 
                    I'm a respectful student looking for a supportive living environment. Would you like to chat more about the room and your expectations?
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your message
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    rows={4}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Write your personal message here..."
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-orange-600 hover:bg-orange-700"
                    onClick={() => handleSendMessage(selectedMatch.id)}
                  >
                    Send Message
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedMatch(null)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tips Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Success</h2>
            <p className="text-lg text-gray-600">Make the most of your matches</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Be Personal</h3>
                <p className="text-sm text-gray-600">
                  Mention specific details from their profile to show genuine interest.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Be Respectful</h3>
                <p className="text-sm text-gray-600">
                  Remember you're reaching out to someone's home. Be polite and considerate.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Be Yourself</h3>
                <p className="text-sm text-gray-600">
                  Authenticity builds trust. Share what makes you a great housemate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

