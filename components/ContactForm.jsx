"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Send } from "lucide-react";
import siteConfig from "@/data/siteConfig";

const initialState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanValue = name === "name" ? value.replace(/[0-9]/g, "") : value;

    setValues((v) => ({ ...v, [name]: cleanValue }));
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
        setValues(initialState);
        await Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Thanks for reaching out we'll get back to you as soon as possible.",
          confirmButtonColor: "#DC0000",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Something Went Wrong",
          text: "We couldn't send your message. Please try again or reach us on WhatsApp.",
          confirmButtonColor: "#DC0000",
        });
      }
    } catch (err) {
      await Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "We couldn't send your message. Please try again or reach us on WhatsApp.",
        confirmButtonColor: "#DC0000",
      });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-navy-900 mb-2"
          >
            Full Name <span className="text-brand-red">*</span>
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
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-navy-900 mb-2"
          >
            Phone / WhatsApp <span className="text-brand-red">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 (000) 000-0000"
            className="w-full rounded-lg border border-navy-100 px-4 py-3 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-bold text-navy-900 mb-2"
        >
          Email Address <span className="text-brand-red">*</span>
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
        <label
          htmlFor="message"
          className="block text-sm font-bold text-navy-900 mb-2"
        >
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for product category, quantity, and destination."
          className="w-full rounded-lg border border-navy-100 px-4 py-3 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
