import { motion } from 'framer-motion'
import heroBg from '../assets/images/hero-bg.jpg'

interface HeroProps {
  title: string
  description: string
  startDate: string
  buttonText: string
}

const Hero = ({ title, description, startDate, buttonText }: HeroProps) => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: '88.2% 50%'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 w-full">
        <div className="w-full md:w-1/2 ml-5 pt-5 md:ml-20 md:pt-20">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
            style={{ color: '#f1c50e', lineHeight: '0.95' }}
          >
            {title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-yellow-400 rounded-2xl p-6 max-w-md mb-8"
          >
            <p className="text-black font-bold text-lg">
              {description}
            </p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all mb-8"
          >
            {buttonText}
          </motion.button>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-yellow-400 font-bold text-lg"
          >
            {startDate}
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero