import { motion } from 'framer-motion'
import authorPhoto from '../assets/images/author.jpg'

interface AuthorProps {
  name: string
  description: string
  buttonText: string
}

const Author = ({ name, description, buttonText }: AuthorProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-yellow-400 rounded-full w-64 h-64 absolute -top-8 -left-8 z-0"></div>
            <img 
              src={authorPhoto} 
              alt={name}
              className="relative z-10 rounded-xl shadow-xl w-full object-cover"
              style={{ height: '500px', objectFit: 'cover' }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{name}</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <button className="btn-primary mt-8">
              {buttonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Author