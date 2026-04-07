import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'

interface Review {
  text: string
  author: string
  rating: number
}

interface ReviewsProps {
  reviews: Review[]
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Отзывы наших участниц
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaQuoteLeft className="text-yellow-400 text-3xl mb-4" />
              <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{review.author}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-black font-bold">{review.author[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews