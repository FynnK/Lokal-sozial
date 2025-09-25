import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { MessageCircle, Send, Phone, Video, MoreVertical, Search, Star } from 'lucide-react'

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState('')

  // Mock conversations data
  const conversations = [
    {
      id: 1,
      name: 'Frau Schmidt',
      age: 65,
      photo: 'FS',
      lastMessage: 'That sounds wonderful! When would you like to visit?',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      compatibility: 95
    },
    {
      id: 2,
      name: 'Herr Weber',
      age: 67,
      photo: 'HW',
      lastMessage: 'I would love to show you the room this weekend.',
      timestamp: '1 hour ago',
      unread: 0,
      online: false,
      compatibility: 88
    },
    {
      id: 3,
      name: 'Frau Müller',
      age: 72,
      photo: 'FM',
      lastMessage: 'Thank you for your interest in my room!',
      timestamp: '1 day ago',
      unread: 1,
      online: false,
      compatibility: 92
    }
  ]

  // Mock messages for selected conversation
  const messages = {
    1: [
      {
        id: 1,
        sender: 'them',
        text: 'Hello Maria! Thank you for your message. I\'m delighted to hear from you.',
        timestamp: '10:30 AM'
      },
      {
        id: 2,
        sender: 'me',
        text: 'Hi Frau Schmidt! I\'m really interested in your room. Could you tell me more about the living arrangement?',
        timestamp: '10:45 AM'
      },
      {
        id: 3,
        sender: 'them',
        text: 'Of course! I have a lovely room available with garden access. I enjoy cooking and would be happy to share meals if you\'re interested. I\'m looking for someone respectful who appreciates a quiet, supportive environment.',
        timestamp: '11:00 AM'
      },
      {
        id: 4,
        sender: 'me',
        text: 'That sounds perfect! I love cooking too and would really appreciate the supportive environment. I\'m a psychology student and quite quiet. Would it be possible to visit sometime this week?',
        timestamp: '11:15 AM'
      },
      {
        id: 5,
        sender: 'them',
        text: 'That sounds wonderful! When would you like to visit?',
        timestamp: '11:30 AM'
      }
    ]
  }

  const currentMessages = messages[selectedConversation] || []
  const currentConversation = conversations.find(c => c.id === selectedConversation)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate sending message
      alert('Message sent!')
      setNewMessage('')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Messages</h1>
              <p className="text-lg text-gray-600">
                Connect with your potential housemates
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {conversations.filter(c => c.unread > 0).length} unread
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Messages Interface */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
            
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Conversations</CardTitle>
                    <Button size="sm" variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {conversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className={`p-4 cursor-pointer border-b hover:bg-gray-50 transition-colors ${
                          selectedConversation === conversation.id ? 'bg-orange-50 border-orange-200' : ''
                        }`}
                        onClick={() => setSelectedConversation(conversation.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-orange-700">{conversation.photo}</span>
                            </div>
                            {conversation.online && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold text-gray-900 truncate">
                                {conversation.name}, {conversation.age}
                              </p>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                <span className="text-xs text-gray-500">{conversation.compatibility}%</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                              {conversation.unread > 0 && (
                                <Badge className="bg-orange-600 text-white text-xs px-2 py-1">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="h-full flex flex-col">
                {/* Chat Header */}
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-orange-700">{currentConversation?.photo}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {currentConversation?.name}, {currentConversation?.age}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {currentConversation?.online ? 'Online now' : 'Last seen 2 hours ago'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {currentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === 'me'
                              ? 'bg-orange-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === 'me' ? 'text-orange-100' : 'text-gray-500'
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} className="bg-orange-600 hover:bg-orange-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Tip: Be respectful and ask questions about the living arrangement
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Safe</h2>
            <p className="text-lg text-gray-600">Important safety tips for messaging</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">✅ Do</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Keep conversations on the platform initially</li>
                  <li>• Ask about house rules and expectations</li>
                  <li>• Arrange to meet in public first</li>
                  <li>• Trust your instincts</li>
                  <li>• Report any inappropriate behavior</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">❌ Don't</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Share personal financial information</li>
                  <li>• Send money before meeting in person</li>
                  <li>• Give out your home address immediately</li>
                  <li>• Ignore red flags or pushy behavior</li>
                  <li>• Meet alone at their home initially</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

