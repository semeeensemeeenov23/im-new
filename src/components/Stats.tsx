import { motion } from 'framer-motion'

interface StatsProps {
  title: string
  description: string
}

const Stats = ({ title, description }: StatsProps) => {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-black"
        >
          {title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-black text-lg max-w-3xl mx-auto leading-relaxed whitespace-pre-line"
        >
          {description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center gap-8 flex-wrap"
        >
          <div className="bg-black rounded-xl p-8 text-center min-w-[200px]">
            <div className="text-4xl font-bold text-yellow-400">70%+</div>
            <div className="text-white mt-2">возвращаются</div>
          </div>
          <div className="bg-black rounded-xl p-8 text-center min-w-[200px]">
            <div className="text-4xl font-bold text-yellow-400">30-40%</div>
            <div className="text-white mt-2">переходят на новый поток</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats