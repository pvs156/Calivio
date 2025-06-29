'use client'

import React from 'react'
import { TrendingUp, Target, Zap, Users, BarChart3 } from 'lucide-react'

const WhyCalivio = () => {
  const benefits = [
    { icon: TrendingUp, title: 'Boost Close Rates', description: 'Increase your conversion rates by up to 40%' },
    { icon: Target, title: 'Coach in the Moment', description: 'Real-time guidance when you need it most' },
    { icon: Zap, title: 'Eliminate Guesswork', description: 'Data-driven insights for every decision' },
    { icon: Users, title: 'Seamless Integration', description: 'Works with your existing tools and workflow' },
    { icon: BarChart3, title: 'One Unified Dashboard', description: 'All your sales intelligence in one place' },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 full-opacity">
            Why Choose <span className="gradient-text">Calivio</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-soft-lg full-opacity"
            >
              <benefit.icon className="w-14 h-14 text-primary-600 mx-auto mb-6 full-opacity icon-high-contrast" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 full-opacity text-high-contrast">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed full-opacity text-body-contrast">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyCalivio 