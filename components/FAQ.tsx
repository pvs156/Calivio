'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does Calivio integrate with my existing CRM?',
      answer: 'Calivio seamlessly integrates with popular CRMs like Salesforce, HubSpot, and Pipedrive through secure APIs. Setup takes less than 5 minutes.'
    },
    {
      question: 'Is my call data secure and private?',
      answer: 'Yes, we use enterprise-grade encryption and are SOC 2 compliant. Your data is never stored permanently and is processed in real-time only.'
    },
    {
      question: 'How accurate is the AI guidance?',
      answer: 'Our AI has been trained on millions of successful sales conversations and maintains 95%+ accuracy in providing relevant, contextual guidance.'
    },
    {
      question: 'Can I customize the AI suggestions?',
      answer: 'Absolutely! You can train Calivio on your specific sales methodology, objection handling techniques, and company-specific talking points.'
    }
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 full-opacity text-high-contrast">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-card full-opacity"
            >
              <button
                className="w-full text-left p-8 flex items-center justify-between full-opacity"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-6 full-opacity text-high-contrast">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 full-opacity ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 border-t-2 border-gray-100 full-opacity">
                  <div className="pt-6">
                    <p className="text-gray-600 leading-relaxed text-base full-opacity text-body-contrast">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="px-10 py-5 bg-primary-500 rounded-xl text-white font-semibold text-lg shadow-soft full-opacity">
            Contact Calivio
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ 