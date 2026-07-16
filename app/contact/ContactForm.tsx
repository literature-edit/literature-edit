"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "programmes",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending email query
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "programmes",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="relative w-full bg-[#FCFAF7] border border-[#C5A880]/25 rounded-xl p-8 shadow-sm">
      {/* 3D background shadow offset */}
      <div className="absolute inset-0 bg-[#C5A880]/5 rounded-xl -z-10 translate-x-1 translate-y-1 pointer-events-none" />

      {status === "success" ? (
        <div className="text-center py-10 flex flex-col items-center">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-200 text-emerald-600 mb-4 animate-bounce">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-lg font-bold text-[#9E3E26] uppercase tracking-wider mb-2">
            Message Sent
          </h3>
          <p className="font-serif-body text-[14px] leading-relaxed text-[#2E2522]/80 max-w-sm">
            Thank you for reaching out. We will read your inquiry carefully and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 font-display text-[10px] tracking-[0.2em] font-bold text-[#9E3E26] hover:text-[#85321E] uppercase"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="font-display text-lg font-bold text-[#9E3E26] uppercase tracking-wider mb-6 pb-2 border-b border-[#C5A880]/20">
            Submit a Query
          </h3>

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-display text-[10px] font-bold tracking-[0.16em] text-[#2E2522]/85 uppercase">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Asma Khan"
              className="w-full bg-[#FAF6F0]/80 border border-[#C5A880]/40 rounded px-4 py-3 font-serif-body text-[14px] text-[#2E2522] focus:outline-none focus:border-[#9E3E26]/75 focus:ring-1 focus:ring-[#9E3E26]/75 placeholder-[#2E2522]/40"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-display text-[10px] font-bold tracking-[0.16em] text-[#2E2522]/85 uppercase">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. hello@literatureedit.com"
              className="w-full bg-[#FAF6F0]/80 border border-[#C5A880]/40 rounded px-4 py-3 font-serif-body text-[14px] text-[#2E2522] focus:outline-none focus:border-[#9E3E26]/75 focus:ring-1 focus:ring-[#9E3E26]/75 placeholder-[#2E2522]/40"
            />
          </div>

          {/* Subject Select */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="font-display text-[10px] font-bold tracking-[0.16em] text-[#2E2522]/85 uppercase">
              Area of Interest
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#FAF6F0]/80 border border-[#C5A880]/40 rounded px-4 py-3 font-serif-body text-[14px] text-[#2E2522] focus:outline-none focus:border-[#9E3E26]/75 focus:ring-1 focus:ring-[#9E3E26]/75 cursor-pointer"
            >
              <option value="programmes">Academic Programmes (IGCSE / IB)</option>
              <option value="editing">Editorial Services (Developmental / Line Edits)</option>
              <option value="mentorship">University Mentorship (Statements / Interviews)</option>
              <option value="general">General Inquiry / Consultation</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-display text-[10px] font-bold tracking-[0.16em] text-[#2E2522]/85 uppercase">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please details the syllabus, target goals, or share writing manuscript details..."
              className="w-full bg-[#FAF6F0]/80 border border-[#C5A880]/40 rounded px-4 py-3 font-serif-body text-[14px] text-[#2E2522] focus:outline-none focus:border-[#9E3E26]/75 focus:ring-1 focus:ring-[#9E3E26]/75 placeholder-[#2E2522]/40 resize-y"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center px-8 py-3.5 bg-[#9E3E26] hover:bg-[#85321E] text-xs tracking-[0.2em] font-display font-bold text-white uppercase transition-all duration-300 rounded shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending Query..." : "Submit Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
