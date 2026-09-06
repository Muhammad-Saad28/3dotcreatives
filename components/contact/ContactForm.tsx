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
      <div className="text-center py-16" role="status">
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-olive" />
          <div className="w-3 h-3 rounded-full bg-rust-gold" />
          <div className="w-3 h-3 rounded-full bg-olive" />
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
      <div>
        <label
          htmlFor="name"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.name ? "border-red-500" : "border-dark-olive/15"
          } text-dark-olive focus:border-olive focus:outline-none transition-colors text-sm`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.email ? "border-red-500" : "border-dark-olive/15"
          } text-dark-olive focus:border-olive focus:outline-none transition-colors text-sm`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.phone ? "border-red-500" : "border-dark-olive/15"
          } text-dark-olive focus:border-olive focus:outline-none transition-colors text-sm`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className="w-full px-4 py-3 bg-transparent border-b border-dark-olive/15 text-dark-olive focus:border-olive focus:outline-none transition-colors text-sm"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold"
        >
          Service *
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => handleChange("service", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.service ? "border-red-500" : "border-dark-olive/15"
          } text-dark-olive focus:border-olive focus:outline-none transition-colors appearance-none text-sm`}
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
          <p id="service-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[11px] tracking-[0.15em] text-dark-olive/50 uppercase mb-2 font-bold"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full px-4 py-3 bg-transparent border-b ${
            errors.message ? "border-red-500" : "border-dark-olive/15"
          } text-dark-olive focus:border-olive focus:outline-none transition-colors resize-none text-sm`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
          <p className="text-red-600 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto px-8 py-4 bg-dark-olive text-cream text-xs tracking-[0.12em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-olive disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
