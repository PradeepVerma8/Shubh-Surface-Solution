import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {

  const [state, handleSubmit] = useForm("xkoqrezl");

  if (state.succeeded) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">✅ Message Sent Successfully</h2>
        <p className="mt-4">We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="pt-16">

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-white p-10 rounded-xl shadow-lg">

            <h2 className="text-3xl font-bold mb-8 text-center">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-lg"
              />

              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border p-3 rounded-lg"
              />

              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full border p-3 rounded-lg"
              />

              <select
                name="service"
                required
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Select Service</option>
                <option value="Acrylic Laminate">Acrylic Laminate</option>
                <option value="UV Coating">UV Coating</option>
                <option value="PUR Laminate">PUR Laminate</option>
                <option value="Slot Die Coating">Slot Die Coating</option>
                <option value="Strategic Planning & Consulting">
                  Strategic Planning & Consulting
                </option>
                <option value="Technical Support">
                  Technical Support
                </option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full border p-3 rounded-lg"
              />

              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 w-full"
              >
                {state.submitting ? "Sending..." : "Submit"}
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;