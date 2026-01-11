import React from 'react';
import { Code, Smartphone, Cloud, Search, Shield, Headphones, ArrowRight, CheckCircle } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const ServicesPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  const services = [
    {
      icon: Code,
      title: "Acrylic Laminate",
      description: "Custom acrylic sheet solutions designed with innovation, durability, and superior performance in mind",
      features: ["Premium Grade Materials", "Custom Sizes & Colors", "Durable & Weather-Resistant"],
      image: "https://media.designcafe.com/wp-content/uploads/2024/05/14182709/what-is-acrylic-sheet-interior-design.jpg"
    },
    {
      icon: Smartphone,
      title: "UV Coating",
      description: "High-precision UV coating solutions designed for acrylic sheets, signage, labels, and premium packaging.",
      features: ["Fast Curing for High-Speed Production", "UV, Scratch & Chemical Resistant Surface", "High Gloss & Matte UV Finish Options", "Dust-Free, Spot-Free Premium Coating"],
      image: "https://iprorwxhjljpli5q-static.micyjz.com/cloud/liBpoKnklkSRkjjimkoliq/1.jpg"
    },
    {
      icon: Cloud,
      title: "Stategice Planning",
      description: "High-performance acrylic sheet manufacturing and supply solutions for modern industrial needs",
      features: ["Quality Inspection", "Custom Print Design", "Logistics Management"],
      image: "https://www.oryxalign.com/hubfs/AdobeStock_568987680.jpeg"
    },
    // {
    //   icon: Search,
    //   title: "Digital Marketing",
    //   description: "Comprehensive digital marketing strategies to grow your online presence",
    //   features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Marketing"],
    //   price: "Starting from $999/month",
    //   image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg"
    // },
    // {
    //   icon: Shield,
    //   title: "Cybersecurity",
    //   description: "Protect your business with comprehensive security solutions and consulting",
    //   features: ["Security Audits", "Vulnerability Assessment", "Compliance Consulting", "Security Training"],
    //   price: "Starting from $1,499",
    //   image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"
    // },
    {
      icon: Headphones,
      title: "Consulting",
      description: "Strategic technology consulting to align  with your business objectives",
      features: ["Technology Strategy", "System Integration", "Process Optimization", "Digital Transformation"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description: "We understand your business needs and project requirements"
    },
    {
      step: "2",
      title: "Planning",
      description: "Create detailed project plan with timelines and milestones"
    },
    {
      step: "3",
      title: "Development",
      description: "Build your solution using best practices and modern technologies"
    },
    {
      step: "4",
      title: "Testing",
      description: "Thorough testing to ensure quality and performance"
    },
    {
      step: "5",
      title: "Launch",
      description: "Ensure fast, secure, and reliable product delivery to your doorstep"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            High-quality acrylic sheet solutions crafted to strengthen your business performance and long-term industrial growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we deliver precision-cut acrylic sheet solutions designed to meet your unique business specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <div className="text-blue-600 font-semibold">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-full top-8 w-8 h-0.5 bg-blue-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"> Materials and Machinery We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in modern manufacturing technologies to ensure accuracy, efficiency, and consistent product quality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['PMMA', 'Impact', 'Films', 'Vinyl Rolls', 'Solvent', 'Color Pigments'].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="text-lg font-semibold text-gray-900">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your business goals with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {/* <button className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base">
              View Portfolio
            </button> */}
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default ServicesPage;