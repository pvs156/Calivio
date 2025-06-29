'use client'

import React from 'react'

const Integrations = () => {
  const integrations = [
    { name: 'Zoom', logo: '🎥' },
    { name: 'Microsoft Teams', logo: '👥' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🔶' },
  ]

  return (
    <section id="integrations" className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 full-opacity text-high-contrast">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center shadow-soft-lg full-opacity"
            >
              <div className="text-5xl mb-6 full-opacity">{integration.logo}</div>
              <h3 className="text-lg font-semibold text-gray-900 full-opacity text-high-contrast">{integration.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations 