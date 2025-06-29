'use client'

import React from 'react'
import { Shield } from 'lucide-react'

const Security = () => {
  return (
    <section id="security" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-16 max-w-4xl mx-auto shadow-soft-lg full-opacity">
            <Shield className="w-20 h-20 text-primary-600 mx-auto mb-8 full-opacity icon-high-contrast" />
            <h2 className="text-4xl font-bold mb-8 text-gray-900 full-opacity text-high-contrast">
              Enterprise-Grade <span className="gradient-text">Security</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed full-opacity text-body-contrast">
              GDPR/CCPA ready, role-based access control, and bank-level encryption 
              to keep your sales data secure and compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="bg-gray-100 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-800 full-opacity text-medium-contrast">SOC 2 Compliant</span>
              <span className="bg-gray-100 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-800 full-opacity text-medium-contrast">GDPR Ready</span>
              <span className="bg-gray-100 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-800 full-opacity text-medium-contrast">256-bit Encryption</span>
              <span className="bg-gray-100 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-800 full-opacity text-medium-contrast">Role-based Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security 