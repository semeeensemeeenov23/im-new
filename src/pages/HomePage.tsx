import Hero from '../components/Hero'
import TargetAudience from '../components/TargetAudience'
import Quote from '../components/Quote'
import Benefits from '../components/Benefits'
import Advantages from '../components/Advantages'
import Author from '../components/Author'
import Stats from '../components/Stats'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { siteContent } from '../data/content'

const basePath = import.meta.env.BASE_URL;

const HomePage = () => {
  return (
    <main>
      <Hero 
        title={siteContent.hero.title}
        description={siteContent.hero.description}
        startDate={siteContent.hero.startDate}
        buttonText={siteContent.hero.buttonText}
      />
      <TargetAudience 
        title={siteContent.targetAudience.title}
        items={siteContent.targetAudience.items}
      />
      <Quote 
        text={siteContent.quote.text}
        buttonText={siteContent.quote.buttonText}
      />
      <Benefits 
        title={siteContent.benefits.title}
        items={siteContent.benefits.items}
      />
      <Advantages items={siteContent.advantages.items} />
      <Author 
        name={siteContent.author.name}
        description={siteContent.author.description}
        buttonText={siteContent.author.buttonText}
      />
      <Stats 
        title={siteContent.stats.title}
        description={siteContent.stats.description}
      />
      {/* ИСПРАВЛЕНО: убрано лишнее /public/ */}
      <Gallery images={siteContent.gallery.images.map(img => `${basePath}images/${img}`)} />
      <Reviews reviews={siteContent.reviews.items} />
      <Form 
        title={siteContent.form.title}
        namePlaceholder={siteContent.form.namePlaceholder}
        emailPlaceholder={siteContent.form.emailPlaceholder}
        phonePlaceholder={siteContent.form.phonePlaceholder}
        submitText={siteContent.form.submitText}
      />
      <Footer />
    </main>
  )
}

export default HomePage