const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © {currentYear} «Новая Я». Все права защищены.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Курс стройности и возвращения к здоровью
        </p>
      </div>
    </footer>
  )
}

export default Footer