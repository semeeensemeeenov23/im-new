import { motion } from 'framer-motion'
import { FaAppleAlt, FaDumbbell, FaHeartbeat } from 'react-icons/fa'
import type { ReactElement } from 'react'

type AdvantageIcon = 'food' | 'sport' | 'bonus'

const iconsMap: Record<AdvantageIcon, () => ReactElement> = {
  food: () => <FaAppleAlt className="text-4xl text-black" />,
  sport: () => <FaDumbbell className="text-4xl text-black" />,
  bonus: () => <FaHeartbeat className="text-4xl text-black" />
}

interface AdvantageItem {
  icon: AdvantageIcon
  title: string
  description: string
}

interface AdvantagesProps {
  items: AdvantageItem[]
}

const Advantages = ({ items }: AdvantagesProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md">
                  <IconComponent />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Advantages