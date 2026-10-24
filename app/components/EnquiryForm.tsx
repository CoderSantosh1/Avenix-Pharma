"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { products, services } from "@/app/data/data";
import Icon, { type Icon as IconName } from "./ui/Icons";

function Field({
  label,
  icon,
  required,
  children,
}: {
  label?: string;
  icon: IconName;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1.5 block text-[14px] font-medium text-navy">
          {label} {required && <span className="text-red-500">*</span>}
        </span>
      )}
      <span className="group relative block">
        <Icon
          name={icon}
          className="pointer-events-none absolute left-4 top-[15px] h-[18px] w-[18px] text-muted transition-colors group-focus-within:text-teal"
        />
        {children}
      </span>
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#d8e3ee] bg-white py-3 pl-12 pr-4 text-[14px] text-navy outline-none transition-all duration-300 placeholder:text-[#8a99ab] focus:border-teal focus:shadow-[0_0_0_4px_rgba(8,169,197,0.12)]";

/**
 * Contact / enquiry form. There is no backend yet, so submitting only shows
 * a confirmation; wire `onSubmit` to an API route or server action later.
 */
export default function EnquiryForm({
  variant = "enquiry",
}: {
  variant?: "enquiry" | "contact";
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const isEnquiry = variant === "enquiry";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    }, 900);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center py-12 text-center animate-zoom-in">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal text-white animate-pulse-ring">
          <Icon name="check" className="h-10 w-10" />
        </span>
        <h3 className="mt-6 heading-sub">Thank you!</h3>
        <p className="mt-2 max-w-sm text-[15px] text-muted">
          Your {isEnquiry ? "enquiry" : "message"} has been received. Our team
          will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[14px] font-semibold text-primary hover:text-teal-dark"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={isEnquiry ? "Full Name" : undefined} icon="user" required>
          <input required name="name" placeholder={isEnquiry ? "Enter your full name" : "Your Name *"} className={inputClass} />
        </Field>
        {isEnquiry ? (
          <Field label="Company Name" icon="building">
            <input name="company" placeholder="Enter company name" className={inputClass} />
          </Field>
        ) : (
          <Field icon="mail" required>
            <input required type="email" name="email" placeholder="Your Email *" className={inputClass} />
          </Field>
        )}
      </div>

      <div className={`grid grid-cols-1 gap-4 ${isEnquiry ? "sm:grid-cols-2" : ""}`}>
        {isEnquiry && (
          <Field label="Email Address" icon="mail" required>
            <input required type="email" name="email" placeholder="Enter your email address" className={inputClass} />
          </Field>
        )}
        <Field label={isEnquiry ? "Phone Number" : undefined} icon="phone" required>
          <input required type="tel" name="phone" placeholder={isEnquiry ? "Enter your phone number" : "Your Phone Number *"} className={inputClass} />
        </Field>
      </div>

      <Field label={isEnquiry ? "Product / Service Interest" : undefined} icon={isEnquiry ? "grid" : "file"} required>
        <select required name="interest" defaultValue="" className={`${inputClass} appearance-none`}>
          <option value="" disabled>
            {isEnquiry ? "Select product / service" : "Subject *"}
          </option>
          {isEnquiry ? (
            <>
              <optgroup label="Services">
                {services.map((s) => (
                  <option key={s.slug}>{s.title}</option>
                ))}
              </optgroup>
              <optgroup label="Products">
                {products.map((p) => (
                  <option key={p.slug}>{p.name}</option>
                ))}
              </optgroup>
            </>
          ) : (
            ["Product Enquiry", "Partnership", "Distribution", "Support", "Other"].map((s) => (
              <option key={s}>{s}</option>
            ))
          )}
        </select>
        <Icon name="chevron" className="pointer-events-none absolute right-4 top-[15px] h-4 w-4 rotate-90 text-muted" />
      </Field>

      <Field label={isEnquiry ? "Message" : undefined} icon="message" required>
        <textarea
          required
          name="message"
          rows={4}
          placeholder={isEnquiry ? "Write your message here..." : "Your Message *"}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className={isEnquiry ? "flex justify-center pt-2" : "pt-1"}>
        <button
          type="submit"
          disabled={status === "sending"}
          className={`shine group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0a4a91] to-primary px-10 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_-12px_rgba(8,102,178,0.8)] disabled:opacity-70 ${
            isEnquiry ? "min-w-[230px]" : "w-full"
          }`}
        >
          {status === "sending" ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending...
            </>
          ) : (
            <>
              {isEnquiry ? "Submit Enquiry" : "Send Message"}
              <Icon name={isEnquiry ? "arrow" : "send"} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
