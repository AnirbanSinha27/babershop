'use client'; // Add this at the top for client-side features

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faMapMarkerAlt, faClock, faCalendarAlt,faCheck,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { Disclosure } from '@headlessui/react';
import { faSearch, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  const testimonials = [
    {
      name: "John D.",
      text: "Best haircut I've ever had! The barbers are true professionals."
    },
    {
      name: "Michael S.",
      text: "Consistently great service. I won't go anywhere else now."
    },
    {
      name: "Robert P.",
      text: "Atmosphere is amazing and the haircuts are even better."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  },); // Add this dependency

  const services = [
    "Haircut & Styling",
    "Beard Trim",
    "Hot Towel Shave",
    "Hair Coloring",
    "Kids Haircuts"
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navigation */}
      {/* Navigation */}
<motion.header 
  className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-900 text-white' : 'bg-transparent text-white'}`}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <motion.div 
      className="text-2xl font-bold"
      whileHover={{ scale: 1.05 }}
    >
      PMC BARBER
    </motion.div>

    {/* Desktop Nav */}
    <motion.nav className="hidden md:flex items-center space-x-8">
      {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
        <motion.a 
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-amber-500 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      
      {/* Call Button with Icon */}
      <motion.a
        href="tel:+1234567890"
        className="flex items-center gap-2 hover:text-amber-500"
        whileHover={{ scale: 1.05 }}
      >
        <FontAwesomeIcon icon={faPhone} />
        <span>(123) 456-7890</span>
      </motion.a>
      
      {/* Book Appointment Button */}
      <motion.a
        href="#contact"
        className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book an Appointment
      </motion.a>
    </motion.nav>

    {/* Mobile Menu Button */}
    <motion.button 
      className="md:hidden text-2xl"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
    </motion.button>
  </div>

  {/* Mobile Menu - Updated with new elements */}
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div 
        className="md:hidden bg-gray-900 text-white"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 hover:text-amber-500"
              onClick={() => setIsMenuOpen(false)}
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {item}
            </motion.a>
          ))}
          
          {/* Mobile Call Button */}
          <motion.a
            href="tel:+1234567890"
            className="flex items-center gap-2 py-2 hover:text-amber-500"
            onClick={() => setIsMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>(123) 456-7890</span>
          </motion.a>
          
          {/* Mobile Book Button */}
          <motion.a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-full text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Book an Appointment
          </motion.a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>

      {/* Hero Section */}
      {/* Hero Section */}
<section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
  <div className="container mx-auto px-4 z-10">
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Classic Cuts, Modern Style
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6 text-amber-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium Barber Shop
        </motion.h2>
        
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500" />
            <span>Denton, TX</span>
          </div>
          <a href="#services" className="flex items-center gap-2 hover:text-amber-500">
            <FontAwesomeIcon icon={faBars} className="text-amber-500" />
            <span>Our Services</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-amber-500">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-amber-500" />
            <span>Book Now</span>
          </a>
        </motion.div>
        
        <motion.a
          href="#contact"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book an Appointment
        </motion.a>
      </div>
      
      {/* Right Side - Image */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/image1.png" // Replace with your image path
            alt="PMC Barbershop interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  </div>
  
  {/* Scrolling indicator */}
  <motion.div 
    className="absolute bottom-10 left-0 right-0 flex justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
  >
    <motion.a 
      href="#services"
      className="text-white text-4xl"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      ↓
    </motion.a>
  </motion.div>
</section>

{/* Our Story Section */}
<section id="about" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    {/* Main Centered Title */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
      
      {/* Centered Subheading */}
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-amber-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About PMC Barbershop
      </motion.h3>
    </motion.div>

    <div className="flex flex-col md:flex-row gap-12 items-center">
      {/* Left Column - Image */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/image2.png"
            alt="PMC Barbershop interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Right Column - Text Content */}
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p 
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </motion.p>

        {/* Animated Quotation */}
<motion.blockquote
  className="border-l-4 border-amber-500 pl-6 my-8 italic text-xl relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.6 }}
  whileHover={{
    scale: 1.02,
    boxShadow: "0 5px 15px rgba(245, 158, 11, 0.3)",
    transition: { duration: 0.3 }
  }}
>
  <motion.span
    className="absolute -left-2 -top-4 text-6xl text-amber-500 opacity-20"
    initial={{ scale: 0.8 }}
    whileHover={{ 
      scale: 1,
      opacity: 0.4,
      transition: { duration: 0.3 }
    }}
  >
    &ldquo;
  </motion.span>
  We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best.
  <motion.span
    className="absolute -right-2 -bottom-4 text-6xl text-amber-500 opacity-20"
    initial={{ scale: 0.8 }}
    whileHover={{ 
      scale: 1,
      opacity: 0.4,
      transition: { duration: 0.3 }
    }}
  >
    &rdquo;
  </motion.span>
</motion.blockquote>

        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
        </motion.p>
      </motion.div>
    </div>
  </div>
</section>

            {/* Premium Grooming Section */}
<section id="services" className="py-20 bg-gray-800 text-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Grooming</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
      <motion.p 
        className="text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Barber Services
      </motion.p>
      <motion.p 
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
      </motion.p>
    </motion.div>

    {/* Services Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Haircuts Card */}
      <motion.div
        className="bg-gray-900 p-8 rounded-lg border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -10,
          boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="text-amber-500 text-4xl mb-4">✂️</div>
        <h3 className="text-xl font-bold mb-3">Haircuts</h3>
        <p className="text-gray-300 mb-4">
          Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Classic Cuts</span>
          <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Modern Styles</span>
        </div>
      </motion.div>

      {/* Beard Services Card */}
      <motion.div
        className="bg-gray-900 p-8 rounded-lg border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          y: -10,
          boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="text-amber-500 text-4xl mb-4">🧔</div>
        <h3 className="text-xl font-bold mb-3">Beard Services</h3>
        <p className="text-gray-300 mb-4">
          Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Beard Trims</span>
          <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Beard Shaping</span>
        </div>
      </motion.div>

      {/* Premium Services Card */}
      <motion.div
        className="bg-gray-900 p-8 rounded-lg border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{
          y: -10,
          boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="text-amber-500 text-4xl mb-4">💎</div>
        <h3 className="text-xl font-bold mb-3">Premium Services</h3>
        <p className="text-gray-300 mb-4">
          Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Hair Coloring</span>
          <span className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">Scalp Treatments</span>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CLIENT TESTIMONIALS</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto relative h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="bg-gray-800 p-8 rounded-lg absolute inset-0 flex flex-col justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-amber-500 text-5xl mb-4">"</div>
                <p className="text-xl mb-6">{testimonials[activeTestimonial].text}</p>
                <div className="font-bold">{testimonials[activeTestimonial].name}</div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-amber-500' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<section id="pricing" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Barbering at Fair Prices</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
      <motion.p 
        className="text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Service Prices
      </motion.p>
      <motion.p 
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Choose from our range of professional barbering services.
      </motion.p>
    </motion.div>

    {/* Pricing Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Classic Services Card */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg border border-amber-500/20 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -5,
          borderColor: "rgba(245, 158, 11, 0.4)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute top-0 right-0 bg-amber-500 text-black px-4 py-1 text-sm font-bold rounded-bl-lg">
          MOST POPULAR
        </div>
        <h3 className="text-2xl font-bold mb-2 text-amber-400">Classic Services</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">$25</span>
          <span className="text-gray-400 ml-1">/mo</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Men's Haircut</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Kids Haircut (12 & under)</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Senior Haircut (65+)</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Military/First Responder Cut</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Basic Beard Trim</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Neck & Line Cleanup</span>
          </li>
        </ul>
        <motion.a
          href="#contact"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded text-center block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.a>
      </motion.div>

      {/* Premium Services Card */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg border border-gray-700 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          y: -5,
          borderColor: "rgba(245, 158, 11, 0.4)",
          transition: { duration: 0.3 }
        }}
      >
        <h3 className="text-2xl font-bold mb-2 text-amber-400">Premium Services</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">$35</span>
          <span className="text-gray-400 ml-1">/mo</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Haircut & Beard Combo</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Hot Towel Shave</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Full Beard Shaping</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Color Camo (Gray Blending)</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Hair & Scalp Treatment</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Head Shave with Hot Towel</span>
          </li>
        </ul>
        <motion.a
          href="#contact"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded text-center block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.a>
      </motion.div>

      {/* Packages Card */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg border border-gray-700 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{
          y: -5,
          borderColor: "rgba(245, 158, 11, 0.4)",
          transition: { duration: 0.3 }
        }}
      >
        <h3 className="text-2xl font-bold mb-2 text-amber-400">Packages</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">$50</span>
          <span className="text-gray-400 ml-1">/mo</span>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>The Works (Cut, Shave, Treatment)</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Father & Son Combo</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Groom's Package</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Monthly Membership (2 cuts/mo)</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>First-Time Client Special</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-amber-500 mr-2" />
            <span>Loyalty Program</span>
          </li>
        </ul>
        <motion.a
          href="#contact"
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded text-center block border border-gray-600"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Inquire
        </motion.a>
      </motion.div>
    </div>
  </div>
</section>

        {/* Expert Stylists Section */}
<section id="barbers" className="py-20 bg-gray-800 text-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Stylists</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
      <motion.p 
        className="text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Meet Our Barbers
      </motion.p>
      <motion.p 
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
      </motion.p>
    </motion.div>

    {/* Barber Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Jason Rodriguez */}
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="relative h-80 w-full">
          <Image
            src="/image3.png" // Replace with your image path
            alt="Jason Rodriguez"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1">Jason Rodriguez</h3>
          <p className="text-amber-500 font-medium mb-4">Owner & Master Barber</p>
          <p className="text-gray-300 mb-6">
            With over 15 years of experience, Jason founded PMC Barbershop to bring premium men's grooming services to Denton. Specializing in classic cuts and straight razor shaves, he combines traditional techniques with modern styles.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Marcus Williams */}
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="relative h-80 w-full">
          <Image
            src="/image4.png" // Replace with your image path
            alt="Marcus Williams"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1">Marcus Williams</h3>
          <p className="text-amber-500 font-medium mb-4">Senior Barber</p>
          <p className="text-gray-300 mb-6">
            Marcus brings 8 years of experience to PMC Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele. Known for his attention to detail and consistently flawless cuts.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Terrence Jackson */}
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="relative h-80 w-full">
          <Image
            src="/image5.png" // Replace with your image path
            alt="Terrence Jackson"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1">Terrence Jackson</h3>
          <p className="text-amber-500 font-medium mb-4">Barber & Stylist</p>
          <p className="text-gray-300 mb-6">
            Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look while maintaining your personal style preferences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Visit Our Shop Section */}
<section id="location" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Shop</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
      <motion.p 
        className="text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Location
      </motion.p>
      <motion.p 
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Conveniently located in Denton, TX
      </motion.p>
    </motion.div>

    {/* Contact Card */}
    <motion.div
      className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact Information</h3>
        
        <div className="space-y-6 text-left mb-8">
          <div>
            <h4 className="font-bold text-lg mb-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 mr-3" />
              Address
            </h4>
            <p className="text-gray-300 pl-9">
              518 Acme St unit 101, Denton, TX 76205, United States
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-2 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-amber-500 mr-3" />
              Phone
            </h4>
            <p className="text-gray-300 pl-9">
              +1 (940) 808-1569
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="https://maps.google.com?q=518+Acme+St+unit+101,+Denton,+TX+76205"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.a>
          <motion.a
            href="tel:+19408081569"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full border border-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* FAQ Section */}
<section id="faq" className="py-20 bg-gray-800 text-white">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
      <motion.p 
        className="text-lg max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Frequently Asked Questions
      </motion.p>
      <motion.p 
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Answers to common questions about our barbershop services.
      </motion.p>
    </motion.div>

    {/* Search Bar */}
    <motion.div
      className="max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search for questions..."
          className="w-full bg-gray-700 text-white px-6 py-4 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 pl-12"
        />
        <FontAwesomeIcon 
          icon={faSearch} 
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
    </motion.div>

    {/* Category Tabs */}
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      {['All Questions', 'General', 'Services', 'Pricing', 'Support'].map((category) => (
        <button
          key={category}
          className={`px-6 py-2 rounded-full font-medium ${category === 'All Questions' ? 'bg-amber-500 text-black' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          {category}
        </button>
      ))}
    </motion.div>

    {/* FAQ Items */}
    <div className="max-w-3xl mx-auto space-y-4">
      {[
        {
          question: "Do I need an appointment or can I walk in?",
          answer: "We accept both appointments and walk-ins, though we recommend booking an appointment to guarantee your preferred time slot. Walk-ins are served based on availability."
        },
        {
          question: "How long does a typical haircut take?",
          answer: "A standard haircut takes about 30-45 minutes. More complex styles or services like beard work may take up to an hour."
        },
        {
          question: "What form of payment do you accept?",
          answer: "We accept cash, all major credit cards, and mobile payments like Apple Pay and Google Pay."
        },
        {
          question: "Do you offer any loyalty programs or discounts?",
          answer: "Yes! We have a loyalty program where you earn points for every visit. After 10 haircuts, you get one free. We also offer military and student discounts."
        },
        {
          question: "What hair products do you use and sell?",
          answer: "We use premium products including American Crew, Suavecito, and Reuzel. These products are also available for purchase at our shop."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-gray-700 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Disclosure>
            {({ open }) => (
              <div>
                <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left font-medium">
                  <span>{item.question}</span>
                  <FontAwesomeIcon 
                    icon={open ? faChevronUp : faChevronDown} 
                    className="text-amber-500 ml-2"
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-4 pt-2 text-gray-300">
                  {item.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Professional Contact Section */}
<section id="contact" className="py-20 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
      <motion.p
        className="text-lg text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Have questions or ready to book an appointment? Reach out to us today.
      </motion.p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full">
          <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Our Location</h4>
                <p className="text-gray-300">123 Barber Street, Downtown, City</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 text-sm mt-1 inline-block"
                >
                  View on map →
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faPhone} className="text-amber-500 text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                <p className="text-gray-300">(123) 456-7890</p>
                <a 
                  href="tel:+1234567890" 
                  className="text-amber-500 hover:text-amber-400 text-sm mt-1 inline-block"
                >
                  Call now →
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-500/10 p-3 rounded-full mr-4">
                <FontAwesomeIcon icon={faClock} className="text-amber-500 text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                <ul className="text-gray-300 space-y-1">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-6 text-amber-400">Send Us a Message</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" 
              placeholder="John Smith"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" 
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
          <input 
            type="text" 
            id="subject" 
            className="w-full px-4 py-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" 
            placeholder="What's this about?"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
          <textarea 
            id="message" 
            rows="4" 
            className="w-full px-4 py-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" 
            placeholder="Tell us how we can help..."
            required
          ></textarea>
        </div>
        
        <motion.button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-4 rounded transition-colors duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Send Message</span>
          <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
        </motion.button>
      </motion.form>
    </div>
  </div>
</section>

      {/* Call-to-Action Banner */}
<section className="bg-amber-500 text-gray-900 py-16">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Fresh Cut?</h2>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.a
          href="#contact"
          className="bg-gray-900 hover:bg-black text-white font-bold py-3 px-8 rounded-full text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book an Appointment
        </motion.a>
        <motion.a
          href="#services"
          className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-full text-lg border-2 border-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Services
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>


      {/* Footer */}
<footer className="bg-black text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Brand Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-2xl font-bold mb-2">PMC BARBER</div>
        <p className="text-gray-400 mb-4">Classic cuts with modern style</p>
        <p className="text-gray-400">Premium barber services since 2010</p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h3 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h3>
        <ul className="space-y-2">
          {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-lg font-bold mb-4 text-amber-400">Contact Us</h3>
        <address className="not-italic text-gray-400 space-y-2">
          <p className="flex items-start">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 mt-1 mr-3" />
            518 Acme St unit 101, Denton, TX 76205, United States
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-amber-500 mr-3" />
            +1 (940) 808-1569
          </p>
        </address>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-lg font-bold mb-4 text-amber-400">Newsletter</h3>
        <p className="text-gray-400 mb-4">
          Subscribe to our newsletter to receive updates and news.
        </p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
            required
          />
          <motion.button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded whitespace-nowrap"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>
    </div>

    {/* Social & Copyright */}
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="flex space-x-6 mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {['Facebook', 'Twitter', 'Instagram'].map((social) => (
            <motion.a 
              key={social}
              href="#"
              className="text-gray-400 hover:text-amber-500 transition-colors"
              whileHover={{ y: -3 }}
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          className="text-gray-400 text-center md:text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          &copy; {new Date().getFullYear()} PMC Barbershop. All rights reserved.
        </motion.div>
      </div>
    </div>
  </div>
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-black p-3 rounded-full shadow-lg z-50"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label="Back to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </motion.button>
</footer>
    </div>
  );

}