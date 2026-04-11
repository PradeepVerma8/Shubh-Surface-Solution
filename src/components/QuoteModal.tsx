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

  // ✅ FORMSPREE ENDPOINT
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        <div className="p-6">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Get Free Quote</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle className="text-green-500 mx-auto" size={60} />
              <p className="mt-2 font-semibold">
                Quote Request Sent Successfully
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {error && (
                <div className="text-red-600 flex items-center">
                  <AlertCircle className="mr-2" /> {error}
                </div>
              )}

              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Project Details"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white p-3 rounded flex items-center justify-center"
              >
                {isSubmitting ? "Sending..." : "Get Free Quote"}
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