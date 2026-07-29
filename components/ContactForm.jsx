"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import siteConfig from "@/data/siteConfig";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setValues(initialState);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <CheckCircle2 className="text-brand-red mb-4" size={48} />
        <h3 className="text-xl font-extrabold text-navy-900 mb-2">Message Sent</h3>
        <p className="text-navy-500">
          Thanks for reaching out — we&rsquo;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-bold text-brand-red hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-navy-900 mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full rounded-lg border border-navy-100 px-4 py-3 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-navy-900 mb-2">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 (000) 000-0000"
            className="w-full rounded-lg border border-navy-100 px-4 py-3 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-navy-900 mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-navy-100 px-4 py-3 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-navy-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for — product category, quantity, and destination."
          className="w-full rounded-lg border border-navy-100 px-4 py-3 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-brand-red text-sm font-medium">
          <AlertCircle size={18} />
          Something went wrong. Please try again or message us on WhatsApp.
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-60">
        {status === "loading" ? "Sending..." : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
