import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6'

interface FormProps {
  title: string
  namePlaceholder: string
  emailPlaceholder: string
  phonePlaceholder: string
  submitText: string
}

const Form = ({ title, namePlaceholder, emailPlaceholder, phonePlaceholder, submitText }: FormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={namePlaceholder}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={emailPlaceholder}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={phonePlaceholder}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-400 outline-none transition-colors"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input type="checkbox" required className="w-4 h-4" />
                <label className="text-sm text-gray-600">
                  Я даю свое согласие на обработку данных
                </label>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                {submitText}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Контакты</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                  <FaPhone className="text-black" />
                </div>
                <div>
                  <p className="font-bold">Телефон</p>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                  <FaEnvelope className="text-black" />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-600">julia@novaya-ya.ru</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
                  <FaClock className="text-black" />
                </div>
                <div>
                  <p className="font-bold">Часы работы</p>
                  <p className="text-gray-600">Пн-Пт: 10:00 - 20:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Form