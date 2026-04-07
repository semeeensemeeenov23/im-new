import { motion } from 'framer-motion'
import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'
import photo4 from '../assets/images/photo4.jpg'

interface QuoteProps {
  text: string
  buttonText: string
  onButtonClick?: () => void
}

const Quote = ({ text, buttonText, onButtonClick }: QuoteProps) => {
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-20 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full bg-yellow-400 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8"
          >
            <h3 className="text-black text-xs sm:text-sm md:text-lg lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-relaxed max-w-[180px] sm:max-w-[220px] md:max-w-xs">
              {text}
            </h3>
            <button 
              onClick={onButtonClick}
              className="bg-black text-white px-3 sm:px-5 md:px-8 py-1 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold hover:bg-gray-800 transition-all"
            >
              {buttonText}
            </button>
          </motion.div>
          
          <motion.img
            initial={{ opacity: 0, x: -40, y: -60 }}
            whileInView={{ opacity: 0.9, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            src={photo1}
            alt="Результат"
            className="absolute top-[30px] left-[10px] sm:top-[20px] sm:left-20 md:top-[20px] md:left-20 w-[150px] h-[140px] sm:w-[160px] sm:h-[140px] md:w-[280px] md:h-[250px] lg:w-[420px] lg:h-[380px] rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover shadow-xl z-10"
            style={{ objectPosition: '50% 30%' }}
          />
          
          <motion.img
            initial={{ opacity: 0, x: -40, y: 60 }}
            whileInView={{ opacity: 0.9, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            src={photo2}
            alt="Результат"
            className="absolute bottom-[10px] left-[10px] sm:bottom-[-20px] sm:left-20 md:bottom-[-40px] md:left-20 w-[150px] h-[140px] sm:w-[160px] sm:h-[140px] md:w-[280px] md:h-[250px] lg:w-[420px] lg:h-[380px] rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover shadow-xl z-10"
            style={{ objectPosition: '50% 30%' }}
          />
          
          <motion.img
            initial={{ opacity: 0, x: 40, y: -60 }}
            whileInView={{ opacity: 0.9, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            src={photo3}
            alt="Результат"
            className="absolute top-[10px] right-[10px] sm:top-[-20px] sm:right-20 md:top-[-40px] md:right-20 w-[150px] h-[140px] sm:w-[160px] sm:h-[140px] md:w-[280px] md:h-[250px] lg:w-[420px] lg:h-[380px] rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover shadow-xl z-10"
          />
          
          <motion.img
            initial={{ opacity: 0, x: 40, y: 60 }}
            whileInView={{ opacity: 0.9, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            src={photo4}
            alt="Результат"
            className="absolute bottom-[30px] right-[10px] sm:bottom-[20px] sm:right-20 md:bottom-[20px] md:right-20 w-[150px] h-[140px] sm:w-[160px] sm:h-[140px] md:w-[280px] md:h-[250px] lg:w-[420px] lg:h-[380px] rounded-2xl sm:rounded-3xl md:rounded-4xl object-cover shadow-xl z-10"
            style={{ objectPosition: '50% 30%' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Quote