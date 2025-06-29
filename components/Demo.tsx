'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const Demo = () => {
  return (
    <section id="demo" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            See <span className="gradient-text">Calivio</span> in Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
                     <div className="relative bg-white border border-gray-200 rounded-3xl p-4 shadow-soft-lg">
             <div className="relative bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
               <motion.button
                 whileHover={{ scale: 1.1 }}
                 className="w-24 h-24 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center shadow-soft-lg"
               >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo 