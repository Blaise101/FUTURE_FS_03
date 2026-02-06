import { useState } from "react";
import Map from "../components/contacts/Map";
import { useContact } from "../assets/contexts/ContactContext";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    emai: "",
    message: "",
  });
  const { addMessage } = useContact();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(formState);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Info Section */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 serif">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-12 font-light text-lg">
            Whether you have a question about our collections or just want to
            say hi, we'd love to hear from you.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                Visit Our Boutique
              </h3>
              <p className="text-gray-900">
                123 Boutique Lane
                <br />
                20 KG 10 Avenue
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                Contact Details
              </h3>
              <p className="text-gray-900">
                blaise@lunathread.com
                <br />
                (250)79 123-4567
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                Hours of Operation
              </h3>
              <p className="text-gray-900">
                Mon - Sat: 10:00 AM - 7:00 PM
                <br />
                Sun: 12:00 PM - 5:00 PM
              </p>
            </div>
          </div>

          <Map />
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-50">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#C5A59E] rounded-full flex items-center justify-center text-white mb-6 animate-bounce">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 serif">
                Message Received
              </h2>
              <p className="text-gray-500 font-light">
                Thank you for reaching out. We will get back to you within 24
                hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs uppercase tracking-widest font-bold text-[#C5A59E] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-[#FAF9F6] border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-[#C5A59E] transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-[#FAF9F6] border-b px-1 border-gray-200 py-3 focus:outline-none focus:border-[#C5A59E] transition-colors"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-[#FAF9F6] border-b border-gray-200 py-3 px-1 focus:outline-none focus:border-[#C5A59E] transition-colors resize-none"
                  placeholder="How can we help you today?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1A1A1A] text-white uppercase text-xs tracking-widest font-bold py-4 hover:bg-[#C5A59E] transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
