'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Brain, Zap, Target } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Meet{' '}
                <span className="gradient-text">Calivio</span>
                {' '}Revolutionize Your{' '}
                <span className="text-primary-500">Sales Calls</span>
                {' '}with Real-Time AI Guidance
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Calivio is your all-in-one assistant delivering live prompts, instant objection handling, 
                predictive deal scoring, and actionable insights for every sales conversation.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl text-white font-semibold text-lg flex items-center justify-center space-x-2 shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-50 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Try Calivio Now</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">95%</div>
                <div className="text-sm text-gray-500">Close Rate Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">30s</div>
                <div className="text-sm text-gray-500">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">24/7</div>
                <div className="text-sm text-gray-500">AI Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white border border-gray-200 rounded-3xl p-8 animate-float shadow-soft-lg">
              {/* Main Interface Mockup */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Calivio Assistant</div>
                </div>

                {/* AI Suggestions */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="bg-white border border-primary-200 rounded-lg p-3 shadow-card"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Brain className="w-4 h-4 text-primary-500" />
                      </motion.div>
                      <span className="text-sm font-medium text-primary-500">Live Suggestion</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Mention the ROI case study from TechCorp to address their budget concerns."
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-white border border-primary-200 rounded-lg p-3 shadow-card"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <Target className="w-4 h-4 text-primary-500" />
                      </motion.div>
                      <span className="text-sm font-medium text-primary-500">Deal Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-primary-500 h-2 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 1.5, delay: 1.5 }}
                        />
                      </div>
                      <span className="text-sm font-bold text-primary-500">78%</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="bg-white border border-orange-200 rounded-lg p-3 shadow-card"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <Zap className="w-4 h-4 text-orange-500" />
                      </motion.div>
                      <span className="text-sm font-medium text-orange-500">Objection Alert</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Client mentioned 'expensive' - suggest value-based pricing approach."
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-soft-lg"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-soft-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 