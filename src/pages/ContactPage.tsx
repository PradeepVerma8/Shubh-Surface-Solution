import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import type { ContactMessage } from "../lib/supabase";

const ContactPage = () => {
  const [formData, setFormData] = useState<
    Omit<ContactMessage, "id" | "created_at">
  >({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase
        .from("contact_messages")
        .insert([formData]);

      if (submitError) {
        throw submitError;
      }

      setIsSubmitted(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "8112518917",
      subtext: "Sun-Mon from 8am to 5pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: "1998shubham2017@gmail.com",
      subtext: "Send us your query anytime!",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Rajkot , Gujrat",
      subtext: "Come say hello at our office HQ",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Sun - Mon: 8:00AM - 5:00PM",
      // subtext: "Saturday: 9:00AM - 1:00PM"
    },
  ];

  const services = [
    // 'Web Development',
    // 'Mobile App Development',
    // 'Cloud Solutions',
    // 'Digital Marketing',
    // 'Cybersecurity',
    // 'IT Consulting'

    "Plant Setup",
    "Acrylic Laminate",
    "Roll To Roll Printing",
    "Technical Support",
    "Stategice Planning & Consulting",
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Production timelines depend on the order size and customization requirements. Most standard acrylic sheet or printing projects are completed within 7–15 working days, while large or specialized orders may take a bit longer. We always provide a detailed timeline during the quotation process..",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally. This includes updates, security patches, and technical support.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements based on your needs. Contact us for a detailed quote.",
    },
    {
      question: "What materials and machinery do you use for production?",
      answer:
        "We use premium-grade cast and extruded acrylic materials along with advanced CNC machines, laser cutters, and UV printers to ensure top-notch clarity, strength, and precision in every produc",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our team of experts
            and let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to
                      you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <span className="text-red-700">{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 flex items-center justify-center font-semibold">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get in touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We'd love to hear from you. Our team is ready to help you
                  transform your business with the right technology solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1 text-sm sm:text-base">
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-500">{info.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Map */}
              {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map Coming Soon</p>
                    <p className="text-sm text-gray-400">123 Business Street, Tech City, TC 12345</p>
                  </div>
                </div>
              </div> */}
              
<div className="bg-white rounded-xl shadow-lg overflow-hidden">
  <div className="h-64">
    <iframe
      title="ShubhSurface"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.80351149273!2d70.82129635!3d22.27348695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1763187585563!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <div className="p-4 text-center">
    <MapPin className="h-6 w-6 text-gray-500 mx-auto mb-1" />
    <p className="text-gray-600 font-medium">ShubhSurface</p>
    <p className="text-sm text-gray-500">Rajkot, Gujarat, India</p>
  </div>
</div>


            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Contact our team today and let's turn your ideas into
            reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 text-sm sm:text-base">
              Name Of Trust
            </button>
            {/* <a href="tel:+15551234567" className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200 text-center text-sm sm:text-base">
              Call Us Now
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
