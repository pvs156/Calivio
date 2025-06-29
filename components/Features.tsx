'use client'

import React from 'react'
import { 
  MessageSquare, 
  Zap, 
  Database, 
  BarChart3, 
  Target, 
  FileText,
  Brain,
  TrendingUp 
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Live Conversation Guidance',
      description: 'Real-time prompts & suggestions for every call to help you navigate conversations with confidence.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Instant Objection Handling',
      description: 'Instantly handle concerns with AI-powered suggestions tailored to your prospect\'s specific objections.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'CRM Data Auto-Fill',
      description: 'Prospect info auto-populated and updated mid-call, keeping your CRM data fresh and accurate.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Feedback',
      description: 'Live tone/sentiment analysis and coaching tips to improve your sales performance in real-time.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Predictive Deal Scoring',
      description: 'Live deal health alerts, updated every 30 seconds to help you prioritize and close deals.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: FileText,
      title: 'Automated Call Summaries',
      description: 'Action items, key moments, and analytics post-call automatically generated and synced to your CRM.',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section id="features" className="py-24 px-6 relative bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 full-opacity text-high-contrast">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Sales Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto full-opacity text-body-contrast">
            Transform your sales process with AI-powered insights, real-time guidance, and automated workflows 
            that help you close more deals faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-soft-lg full-opacity"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mb-4 full-opacity">
                  <feature.icon className="w-8 h-8 text-white full-opacity" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 full-opacity text-high-contrast">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed full-opacity text-body-contrast">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="px-10 py-5 bg-primary-500 rounded-xl text-white font-semibold text-lg shadow-soft full-opacity">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features 