'use client'

import React from 'react'
import { ArrowRight, Link, Mic, Brain, FileText } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Link,
      title: 'Connect Your Tools',
      description: 'Seamlessly integrate with your CRM and call platforms like Zoom, Teams, and Salesforce in under 30 seconds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Mic,
      title: 'Calivio Listens & Analyzes',
      description: 'Our AI listens to your calls in real-time, understanding context, sentiment, and deal progression.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '03',
      icon: Brain,
      title: 'Get Live AI Guidance',
      description: 'Receive instant prompts, objection handling suggestions, and deal scoring updates during your calls.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '04',
      icon: FileText,
      title: 'Auto-Sync & Analyze',
      description: 'Call summaries, action items, and analytics are automatically synced to your CRM for follow-up.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 relative bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 full-opacity text-high-contrast">
            How <span className="gradient-text">Calivio</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto full-opacity text-body-contrast">
            Get up and running in minutes with our simple 4-step process. No complex setup, 
            no training required – just instant AI-powered sales assistance.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-500 transform -translate-y-1/2 full-opacity" />
          
          <div className="grid lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-soft-lg full-opacity">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white border-3 border-primary-500 flex items-center justify-center text-2xl font-bold text-primary-600 mb-4 full-opacity">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-500 flex items-center justify-center full-opacity">
                      <step.icon className="w-8 h-8 text-white full-opacity" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 full-opacity text-high-contrast">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed full-opacity text-body-contrast">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-soft full-opacity">
                      <ArrowRight className="w-5 h-5 text-white full-opacity" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="px-10 py-5 bg-primary-500 rounded-xl text-white font-semibold text-lg shadow-soft full-opacity">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 