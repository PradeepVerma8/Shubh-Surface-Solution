import React, { useState } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";

type QuoteForm = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
};

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuoteForm>({
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

  const services = [
    "Acylic Laminate",
    "UV Coating",
    "PUR Laminate",
    "Slot Die Coating",
    "Stategice Planning & Consulting",
    "Technical Support",
  ];

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

  // ---------- UPDATED: Google Form action + entry IDs from your prefilled link ----------
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdquzYVTeFeG8dm8XLL0bjSQZOLyNhix4nWv1DydrFOqDB2jw/formResponse";

  const payloadMapKeys = {
    name: "entry.1701261256",
    email: "entry.1183973259",
    phone: "entry.2129763542",
    company: "entry.2063456829",
    service: "entry.1002366441",
    message: "entry.697102913",
  };
  // ------------------------------------------------------------------------------------

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { name, email, phone, company, service, message } = formData;

      if (!name || !email || !service || !message) {
        throw new Error("Please fill the required fields.");
      }

      // create (or reuse) hidden iframe so page doesn't navigate away
      let iframe = document.getElementById(
        "google-form-iframe"
      ) as HTMLIFrameElement | null;
      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.name = "google-form-iframe";
        iframe.id = "google-form-iframe";
        document.body.appendChild(iframe);
      }

      // build and submit a normal HTML form to Google Forms
      const form = document.createElement("form");
      form.method = "POST";
      form.action = FORM_ACTION_URL;
      form.target = "google-form-iframe";
      form.style.display = "none";

      const addHidden = (nameAttr: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = nameAttr;
        input.value = value;
        form.appendChild(input);
      };

      addHidden(payloadMapKeys.name, name);
      addHidden(payloadMapKeys.email, email);
      addHidden(payloadMapKeys.phone, phone || "");
      addHidden(payloadMapKeys.company, company || "");
      addHidden(payloadMapKeys.service, service);
      addHidden(payloadMapKeys.message, message);

      document.body.appendChild(form);

      // submit (this will post to Google Forms via the hidden iframe)
      form.submit();

      // cleanup after short delay
      setTimeout(() => {
        try {
          form.remove();
        } catch {}
      }, 1500);

      // show success UI
      setIsSubmitted(true);
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
        onClose();
      }, 2200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSubmitted(false);
      setError(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Get Free Quote
            </h2>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              aria-label="Close quote modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Quote Request Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for your interest. We'll get back to you within 24
                hours with a detailed quote.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
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
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 flex items-center justify-center font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending Quote Request...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
