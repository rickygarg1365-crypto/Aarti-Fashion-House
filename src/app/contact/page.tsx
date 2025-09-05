'use client';

import { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ArrowUpRightIcon,
  CalendarIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import contactData from '@/data/contact.json';
import { ContactInfo } from '@/types';

const contact: ContactInfo = contactData;

interface FormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  serviceType: string;
}

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    serviceType: 'consultation'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const appointmentMessage = `Hello! I'd like to schedule an appointment at Aarti Fashion House.

Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Service: ${formData.serviceType}
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}
- Message: ${formData.message}

Thank you!`;

    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(appointmentMessage)}`, '_blank');
  };

  const handleQuickWhatsApp = () => {
    const message = "Hello! I'd like to know more about Aarti Fashion House and your services.";
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${contact.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${contact.email}`, '_self');
  };

  const serviceTypes = [
    { value: 'consultation', label: 'Style Consultation' },
    { value: 'fabric-selection', label: 'Fabric Selection' },
    { value: 'fitting', label: 'Fitting Appointment' },
    { value: 'general', label: 'General Inquiry' },
  ];

  return (
    <div className="min-h-screen bg-pearl text-charcoal">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cream to-pearl">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-light/20 to-gold-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-sage/15 to-copper/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="mb-8">
              <span className="text-sm font-sans font-medium text-slate tracking-[0.3em] uppercase">
                Connect With Us
              </span>
            </div>
            
            <h1 className="font-display text-5xl lg:text-7xl leading-[0.9] mb-8 text-charcoal">
              Visit Our
              <br />
              <span className="italic text-gold-primary">Atelier</span>
            </h1>

            <p className="font-sans text-lg text-slate-light leading-relaxed mb-12 max-w-3xl mx-auto">
              Experience the art of personalized service at our sophisticated atelier in Punjab. 
              Schedule your private consultation and discover the perfect pieces for your wardrobe.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleQuickWhatsApp}
                className="inline-flex items-center px-8 py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                Quick Chat
              </button>
              <button
                onClick={handleCall}
                className="inline-flex items-center px-8 py-4 border-2 border-gold-primary text-gold-primary font-sans font-medium hover:bg-gold-primary hover:text-white transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-3xl text-charcoal mb-8 leading-tight">
                Get in <span className="italic text-gold-primary">Touch</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-charcoal mb-2">Visit Our Atelier</h3>
                    <p className="font-sans text-slate leading-relaxed">
                      {contact.address.street}<br />
                      {contact.address.city}, {contact.address.state} {contact.address.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-charcoal mb-2">Call Us</h3>
                    <button 
                      onClick={handleCall}
                      className="font-sans text-slate hover:text-gold-primary transition-colors duration-300"
                    >
                      {contact.phone}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-charcoal mb-2">Email Us</h3>
                    <button 
                      onClick={handleEmail}
                      className="font-sans text-slate hover:text-gold-primary transition-colors duration-300"
                    >
                      {contact.email}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-charcoal mb-2">Business Hours</h3>
                    <div className="font-sans text-slate space-y-1">
                      <div className="flex justify-between items-center">
                        <span>Monday - Friday</span>
                        <span>{contact.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Saturday</span>
                        <span>{contact.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sunday</span>
                        <span>{contact.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <div className="bg-cream p-8">
                <h2 className="font-display text-3xl text-charcoal mb-8 leading-tight">
                  Schedule Your <span className="italic text-gold-primary">Consultation</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-sans font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-sans font-medium text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans font-medium text-charcoal mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block font-sans font-medium text-charcoal mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300"
                    >
                      {serviceTypes.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block font-sans font-medium text-charcoal mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block font-sans font-medium text-charcoal mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                        <input
                          type="time"
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gold-primary/20 bg-white text-charcoal focus:border-gold-primary focus:ring-2 focus:ring-gold-primary/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your style preferences, special occasions, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Schedule Appointment</span>
                    <ArrowUpRightIcon className="w-5 h-5" />
                  </button>
                </form>

                <div className="mt-6 p-4 bg-gold-primary/10 border border-gold-primary/20">
                  <p className="font-sans text-sm text-slate">
                    <strong>Note:</strong> This form will create a WhatsApp message with your appointment details. 
                    Our team will confirm your appointment within 2 hours during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              Find <span className="italic text-gold-primary">Our Location</span>
            </h2>
            <p className="font-sans text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              Located in the heart of Punjab, our atelier is easily accessible and offers a sophisticated 
              environment for your consultation and shopping experience.
            </p>
          </div>

          <div className="bg-white border border-gold-primary/20 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="w-16 h-16 text-gold-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl text-charcoal mb-4">Interactive Map</h3>
              <p className="font-sans text-slate mb-6">
                Google Maps integration will be embedded here showing our exact location.
              </p>
              <button
                onClick={() => window.open('https://maps.google.com/?q=Punjab+India', '_blank')}
                className="inline-flex items-center px-6 py-3 bg-gold-primary text-white font-sans font-medium hover:bg-gold-dark transition-colors duration-300"
              >
                View on Google Maps
                <ArrowUpRightIcon className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Directions & Parking */}
      <section className="py-24 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-tight">
                Easy to <span className="italic text-gold-primary">Reach</span>
              </h2>
              <div className="space-y-6 text-slate-light leading-relaxed font-sans text-lg">
                <p>
                  Our atelier is conveniently located in the bustling heart of Punjab, 
                  easily accessible by car, public transportation, and taxi services.
                </p>
                <p>
                  We provide complimentary valet parking for your convenience during your visit. 
                  Simply arrive at our entrance and our staff will assist you.
                </p>
                <p>
                  For first-time visitors, we recommend calling ahead so we can provide 
                  specific directions and ensure your seamless arrival.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-display text-3xl text-gold-primary mb-2">Free</div>
                  <div className="font-sans text-sm text-slate-light">Valet Parking</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl text-gold-primary mb-2">5 Min</div>
                  <div className="font-sans text-sm text-slate-light">From City Center</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gold-primary/20 to-transparent relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=750&fit=crop"
                  alt="Atelier Location"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-pearl text-charcoal p-6">
                <div className="font-serif text-sm text-slate mb-1">Visit</div>
                <div className="font-display text-lg">Our Atelier</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-charcoal mb-8 leading-tight">
            Follow Our <span className="italic text-gold-primary">Journey</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contact.socialMedia.map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className="group p-6 bg-white hover:bg-gold-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-primary/10 group-hover:bg-white/20 border border-gold-primary/30 group-hover:border-white/30 mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRightIcon className="w-6 h-6 text-gold-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-medium text-charcoal group-hover:text-white transition-colors duration-300">
                  {social.platform}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}