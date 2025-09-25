import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Home, Users, ArrowRight, CheckCircle, Upload, User, MapPin, Euro, Calendar } from 'lucide-react'

export default function ProfilePage() {
  const [searchParams] = useSearchParams()
  const userType = searchParams.get('type') || 'seeker'
  const [currentStep, setCurrentStep] = useState(1)
  const [profileData, setProfileData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    // Location
    city: '',
    postalCode: '',
    // Seeker specific
    budget: '',
    moveInDate: '',
    duration: '',
    // Provider specific
    rent: '',
    availableFrom: '',
    roomSize: '',
    // Shared fields
    bio: '',
    interests: [],
    lifestyle: '',
    preferences: []
  })

  const totalSteps = userType === 'seeker' ? 4 : 4

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field, value, checked) => {
    setProfileData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Simulate profile creation
    alert(`Profile created successfully! Redirecting to ${userType === 'seeker' ? 'matches' : 'dashboard'}...`)
    // Redirect to matches page for seekers
    if (userType === 'seeker') {
      window.location.href = '/matches'
    }
  }

  const interestOptions = [
    'Cooking', 'Reading', 'Gardening', 'Music', 'Sports', 'Art', 'Technology', 
    'Travel', 'Languages', 'Photography', 'Movies', 'Board Games'
  ]

  const lifestyleOptions = userType === 'seeker' 
    ? ['Student', 'Working Professional', 'Freelancer', 'Intern', 'Researcher']
    : ['Retired', 'Working', 'Semi-Retired', 'Homemaker', 'Volunteer']

  const preferenceOptions = userType === 'seeker'
    ? ['Non-smoker', 'Pet-friendly', 'Quiet environment', 'Social atmosphere', 'Kitchen access', 'Garden access', 'Parking', 'Near public transport']
    : ['Non-smoking tenant', 'Pet owner welcome', 'Quiet tenant', 'Social tenant', 'Help with household', 'Help with technology', 'Shared meals', 'Independent living']

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${userType === 'seeker' ? 'bg-orange-100' : 'bg-green-100'}`}>
              {userType === 'seeker' ? (
                <Home className={`h-12 w-12 ${userType === 'seeker' ? 'text-orange-600' : 'text-green-600'}`} />
              ) : (
                <Users className={`h-12 w-12 ${userType === 'seeker' ? 'text-orange-600' : 'text-green-600'}`} />
              )}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your {userType === 'seeker' ? 'Room Seeker' : 'Room Provider'} Profile
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {userType === 'seeker' 
              ? 'Tell us about yourself so we can find you the perfect home and companion.'
              : 'Share details about your home and what kind of companion you\'d like to welcome.'
            }
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  userType === 'seeker' ? 'bg-orange-600' : 'bg-green-600'
                }`}
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {currentStep === 1 && 'Basic Information'}
                {currentStep === 2 && 'Location & Preferences'}
                {currentStep === 3 && (userType === 'seeker' ? 'Housing Requirements' : 'Room Details')}
                {currentStep === 4 && 'About You & Interests'}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && 'Let\'s start with your basic details'}
                {currentStep === 2 && 'Where are you located and what are your preferences?'}
                {currentStep === 3 && (userType === 'seeker' ? 'Tell us about your housing needs' : 'Describe your available room')}
                {currentStep === 4 && 'Help us understand your personality and interests'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        value={profileData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder={userType === 'seeker' ? '18-35' : '50+'}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lifestyle">I am a *</Label>
                      <Select onValueChange={(value) => handleInputChange('lifestyle', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your status" />
                        </SelectTrigger>
                        <SelectContent>
                          {lifestyleOptions.map(option => (
                            <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+49 123 456 7890"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Location & Preferences */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={profileData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Berlin, Munich, Hamburg..."
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code *</Label>
                      <Input
                        id="postalCode"
                        value={profileData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        placeholder="10115"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Your Preferences *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      {preferenceOptions.map(preference => (
                        <div key={preference} className="flex items-center space-x-2">
                          <Checkbox
                            id={preference}
                            checked={profileData.preferences.includes(preference)}
                            onCheckedChange={(checked) => handleArrayChange('preferences', preference, checked)}
                          />
                          <Label htmlFor={preference} className="text-sm">{preference}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Housing Requirements / Room Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  {userType === 'seeker' ? (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="budget">Monthly Budget (€) *</Label>
                          <Input
                            id="budget"
                            type="number"
                            value={profileData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            placeholder="300-500"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="moveInDate">Preferred Move-in Date *</Label>
                          <Input
                            id="moveInDate"
                            type="date"
                            value={profileData.moveInDate}
                            onChange={(e) => handleInputChange('moveInDate', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="duration">How long are you planning to stay? *</Label>
                        <Select onValueChange={(value) => handleInputChange('duration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value="6-12months">6-12 months</SelectItem>
                            <SelectItem value="1-2years">1-2 years</SelectItem>
                            <SelectItem value="2+years">2+ years</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="rent">Monthly Rent (€) *</Label>
                          <Input
                            id="rent"
                            type="number"
                            value={profileData.rent}
                            onChange={(e) => handleInputChange('rent', e.target.value)}
                            placeholder="350"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="roomSize">Room Size (m²) *</Label>
                          <Input
                            id="roomSize"
                            type="number"
                            value={profileData.roomSize}
                            onChange={(e) => handleInputChange('roomSize', e.target.value)}
                            placeholder="15-25"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="availableFrom">Available From *</Label>
                        <Input
                          id="availableFrom"
                          type="date"
                          value={profileData.availableFrom}
                          onChange={(e) => handleInputChange('availableFrom', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="roomDescription">Room Description</Label>
                        <Textarea
                          id="roomDescription"
                          placeholder="Describe your room and what makes it special..."
                          rows={3}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Step 4: About You & Interests */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="bio">Tell us about yourself *</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder={userType === 'seeker' 
                        ? "I'm a friendly psychology student who loves cooking and reading. I'm looking for a warm, supportive environment where I can focus on my studies while building meaningful connections..."
                        : "I'm a retired teacher who loves gardening and reading. I'm looking for a respectful, friendly young person to share my home with. I enjoy cooking and would love to share meals and conversations..."
                      }
                      rows={4}
                      required
                    />
                  </div>
                  <div>
                    <Label>Your Interests *</Label>
                    <div className="grid md:grid-cols-3 gap-3 mt-2">
                      {interestOptions.map(interest => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={profileData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleArrayChange('interests', interest, checked)}
                          />
                          <Label htmlFor={interest} className="text-sm">{interest}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Profile Photo</h4>
                    <p className="text-sm text-gray-600 mb-3">Add a friendly photo to help others get to know you better.</p>
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={nextStep}
                    className={userType === 'seeker' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'}
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className={userType === 'seeker' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-green-600 hover:bg-green-700'}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Create Profile
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to support you through the profile creation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Contact Support
              </Button>
            </Link>
            <Link to={userType === 'seeker' ? '/how-it-works-seekers' : '/how-it-works-providers'}>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

