import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import Hero from '../components/Hero';
import HeroSection from '../components/HeroSection';
import '../styles/main.scss';
import Motto from '../components/Motto';
import Benefits from '../components/Benefits';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import Testimonials2 from '../components/Testimonials2';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Offices from '../components/Offices';

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <HeroSection />
      <ServicesSection />
      <Motto />
      <Statistics />
      <Benefits />
      <Testimonials />
      <Testimonials2 />
      <Contact /> 
      <Offices />
      <Footer />
    </>
  );
}





