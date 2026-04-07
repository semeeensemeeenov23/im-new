import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

interface GalleryProps {
  images: string[]
}

const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          ДО / ПОСЛЕ
        </motion.h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img 
              src={images[currentIndex]} 
              alt={`Результат ${currentIndex + 1}`}
              className="w-full h-auto object-cover"
              
            />
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            <FaArrowLeft />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
          >
            <FaArrowRight />
          </button>
          
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-yellow-400 w-6' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery