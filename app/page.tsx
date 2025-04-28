import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Section from '@/app/components/Section';
import ContactForm from '@/app/components/ContactForm';
import Footer from '@/app/components/Footer';
import Plots from '@/app/components/Plots';
import Testimonials from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ';
import Investment from '@/app/components/Investment';
import AboutUs from '@/app/components/AboutUs'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
     <AboutUs />

     <Investment />


      
      
      <Plots />
      
      <Testimonials />
      
      <FAQ />
      
      <Section id="contact" title="Contact Us" subtitle="We'd love to hear from you!">
        <ContactForm />
      </Section>
      
      <Footer />
    </>
  );
}