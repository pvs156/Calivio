'use client'

import React from 'react'
import { Brain } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="w-8 h-8 text-primary-500" />
            <span className="text-2xl font-bold gradient-text">Calivio</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; 2024 Calivio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 