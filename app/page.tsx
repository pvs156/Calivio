'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  Clock,
  Database,
  Mic,
  FileText
} from 'lucide-react'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Demo from '@/components/Demo'
import Integrations from '@/components/Integrations'
import Security from '@/components/Security'
import WhyCalivio from '@/components/WhyCalivio'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary-50/50 via-white to-gray-50/30 pointer-events-none" />
      
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Demo />
      <Integrations />
      <Security />
      <WhyCalivio />
      <FAQ />
      <Footer />
    </main>
  )
} 