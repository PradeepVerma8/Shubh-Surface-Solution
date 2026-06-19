
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
    "Acrylic Laminate",
    "UV Coating",
    "PUR Laminate",
    "Slot Die Coating",
    "Strategic Planning & Consulting",
    "Technical Support",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const FORM_ENDPOINT = "https://formspree.io/f/xkoqrezl";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
        }, 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] max-w-3xl w-full overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Get Free Quote</h2>
              <p className="text-blue-100 mt-1">
                Tell us about your project and we'll get back to you.
              </p>
            </div>

            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-8">

          {isSubmitted ? (
            <div className="text-center py-10">
              <CheckCircle
                className="text-green-500 mx-auto mb-4"
                size={70}
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Request Submitted!
              </h3>
              <p className="text-gray-600 mt-2">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center">
                  <AlertCircle className="mr-2" size={18} />
                  {error}
                </div>
              )}

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl outline-none transition"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl outline-none transition"
                />
              </div>

              {/* Phone & Company */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl outline-none transition"
                />

                <input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl outline-none transition"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Service
                </label>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-12 text-gray-700 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 hover:border-blue-400 cursor-pointer"
                  >
                    <option value="">Choose a Service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 p-3 rounded-xl outline-none transition resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white p-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? "Sending Request..." : "Get Free Quote"}
                <Send className="ml-2" size={18} />
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;

