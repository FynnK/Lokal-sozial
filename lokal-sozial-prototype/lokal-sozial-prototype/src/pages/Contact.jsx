import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you every step of the way. Whether you have questions, need support, 
            or want to learn more about intergenerational living, we'd love to hear from you.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="bg-orange-100 p-3 rounded-full mx-auto mb-2">
                    <MessageCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-sm text-gray-600">24/7 Support</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full mx-auto mb-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600">Quick Response</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full mx-auto mb-2">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">Personal Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Select onValueChange={(value) => handleChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="seeker">Room Seeker Support</SelectItem>
                            <SelectItem value="provider">Room Provider Support</SelectItem>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hello@lokalsozial.de</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+49 (0) 30 12345678</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9:00-18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Musterstraße 123<br />
                        10115 Berlin, Germany
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">Monday - Friday</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">Saturday</p>
                      <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-gray-900">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700">
                      <strong>Emergency Support:</strong> Available 24/7 for urgent matters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How quickly do you respond to inquiries?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours during business days. 
                  For urgent matters, we offer 24/7 emergency support for existing community members.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I visit your office in person?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We welcome visitors to our Berlin office. Please schedule an appointment in advance 
                  by calling us or sending an email. Walk-ins are welcome during office hours, subject to availability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer support in languages other than German?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide support in German and English. For other languages, we can arrange translation 
                  services or connect you with community members who speak your language.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How can I report a problem or concern?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can report any issues through this contact form, by calling our support line, 
                  or through the in-app reporting system. We take all concerns seriously and respond promptly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Get Help</h2>
            <p className="text-xl text-gray-600">Choose the support option that works best for you</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-orange-200">
              <CardHeader>
                <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get instant help through our live chat feature available on our website during business hours.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Speak directly with our support team for personalized assistance with your questions.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Call Now
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Help Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Browse our comprehensive help center with guides, tutorials, and frequently asked questions.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Visit Help Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

