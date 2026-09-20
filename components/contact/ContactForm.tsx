"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.phone && !/^[+]?[\d\s()-]{7,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16 animate-fade-in-up" role="status">
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-olive animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-rust-gold animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 rounded-full bg-olive animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
        <h3 className="text-2xl font-bold text-dark-olive mb-4">
          Message Sent!
        </h3>
        <p className="text-dark-olive/55">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div className="group">
        <label
          htmlFor="name"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold group-focus-within:text-olive transition-colors duration-300"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.name ? "border-red-500" : "border-dark-olive/15 focus:border-olive"
          } text-dark-olive focus:outline-none transition-colors duration-300 text-sm`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1.5 animate-fade-in-up" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="group">
        <label
          htmlFor="email"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold group-focus-within:text-olive transition-colors duration-300"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.email ? "border-red-500" : "border-dark-olive/15 focus:border-olive"
          } text-dark-olive focus:outline-none transition-colors duration-300 text-sm`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1.5 animate-fade-in-up" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="group">
        <label
          htmlFor="phone"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold group-focus-within:text-olive transition-colors duration-300"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.phone ? "border-red-500" : "border-dark-olive/15 focus:border-olive"
          } text-dark-olive focus:outline-none transition-colors duration-300 text-sm`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1.5 animate-fade-in-up" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Company */}
      <div className="group">
        <label
          htmlFor="company"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold group-focus-within:text-olive transition-colors duration-300"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="w-full px-4 py-3 bg-transparent border-b border-dark-olive/15 focus:border-olive text-dark-olive focus:outline-none transition-colors duration-300 text-sm"
        />
      </div>

      {/* Service */}
      <div className="group">
        <label
          htmlFor="service"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold group-focus-within:text-olive transition-colors duration-300"
        >
          Service *
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.service ? "border-red-500" : "border-dark-olive/15 focus:border-olive"
          } text-dark-olive focus:outline-none transition-colors duration-300 appearance-none text-sm`}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="text-red-500 text-xs mt-1.5 animate-fade-in-up" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="group">
        <label
          htmlFor="message"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold group-focus-within:text-olive transition-colors duration-300"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.message ? "border-red-500" : "border-dark-olive/15 focus:border-olive"
          } text-dark-olive focus:outline-none transition-colors duration-300 resize-none text-sm`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1.5 animate-fade-in-up" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in-up" role="alert">
          <p className="text-red-600 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto px-8 py-4 bg-dark-olive text-cream text-xs tracking-[0.12em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-olive hover:scale-105 hover:shadow-lg hover:shadow-olive/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            SENDING...
          </span>
        ) : (
          "SEND MESSAGE"
        )}
      </button>
    </form>
  );
}
