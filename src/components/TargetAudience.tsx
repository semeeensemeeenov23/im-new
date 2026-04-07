import { motion } from 'framer-motion'
import { FaWeightScale, FaBaby, FaHeart } from 'react-icons/fa6'
import type { ReactElement } from 'react'

export type IconType = 'weight' | 'baby' | 'fitness'

const iconsMap: Record<IconType, () => ReactElement> = {
  weight: () => <FaWeightScale className="text-4xl text-black" />,
  baby: () => <FaBaby className="text-4xl text-black" />,
  fitness: () => <FaHeart className="text-4xl text-black" />
}

interface AudienceItem {
  icon: IconType
  title: string
  description: string
}

interface TargetAudienceProps {
  title: string
  items: AudienceItem[]
}

const TargetAudience = ({ title, items }: TargetAudienceProps) => {
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
          {title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = iconsMap[item.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center mx-auto -mt-16 mb-6 shadow-md">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TargetAudience